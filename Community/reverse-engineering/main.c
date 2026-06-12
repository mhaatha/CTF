/*
 * CTF Challenge: VM STACK BASED RE
 *
 * VM ISA :
 * 0x01 imm   PUSH imm
 * 0x02       POP
 * 0x03       DUP
 * 0x04 idx   LOAD  mem[idx]
 * 0x05 idx   STORE mem[idx]
 * 0x06       SWAP
 * 0x10       ADD
 * 0x11       SUB
 * 0x12       MUL
 * 0x13       XOR
 * 0x14       AND
 * 0x15 n     ROL  n
 * 0x20       CMP   (a==b → push 1, else 0)
 * 0x21 rel8  JZ    rel8
 * 0x22 rel8  JMP   rel8
 * 0x30 hi lo CALL  addr16
 * 0x31       RET
 * 0xFF imm   HALT  imm
 */

#include <stdio.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>

/* ── opcodes ─────────────────────────────────────────────── */
#define OP_PUSH  0x01
#define OP_POP   0x02
#define OP_DUP   0x03
#define OP_LOAD  0x04
#define OP_STORE 0x05
#define OP_SWAP  0x06
#define OP_ADD   0x10
#define OP_SUB   0x11
#define OP_MUL   0x12
#define OP_XOR   0x13
#define OP_AND   0x14
#define OP_ROL   0x15
#define OP_CMP   0x20
#define OP_JZ    0x21
#define OP_JMP   0x22
#define OP_CALL  0x30
#define OP_RET   0x31
#define OP_HALT  0xFF

/* ── VM ──────────────────────────────────────────────────── */
#define STACK_SIZE 256
#define MEM_SIZE   256

typedef struct {
    uint8_t  stack[STACK_SIZE];
    uint8_t  mem[MEM_SIZE];
    int      sp;
    int      ip;
    int      call_sp;
    int      call_stack[64];
    int      halted;
    uint8_t  exit_code;
} VM;

static void push(VM *vm, uint8_t v) {
    if (vm->sp >= STACK_SIZE) { fputs("overflow\n", stderr); exit(1); }
    vm->stack[vm->sp++] = v;
}

static uint8_t pop(VM *vm) {
    if (vm->sp <= 0)          { fputs("underflow\n", stderr); exit(1); }
    return vm->stack[--vm->sp];
}

static uint8_t peek(VM *vm) {
    if (vm->sp <= 0)          { fputs("underflow\n", stderr); exit(1); }
    return vm->stack[vm->sp - 1];
}

static void inter(VM *vm, const uint8_t *code) {
    uint8_t op = code[vm->ip++];
    switch (op) {
    case OP_PUSH:  push(vm, code[vm->ip++]); break;
    case OP_POP:   pop(vm); break;
    case OP_DUP:   push(vm, peek(vm)); break;
    case OP_LOAD:  push(vm, vm->mem[code[vm->ip++]]); break;
    case OP_STORE: vm->mem[code[vm->ip++]] = pop(vm); break;

    case OP_SWAP: {
        if (vm->sp < 2) { fputs("underflow\n", stderr); exit(1); }
        uint8_t tmp = vm->stack[vm->sp - 1];
        vm->stack[vm->sp - 1] = vm->stack[vm->sp - 2];
        vm->stack[vm->sp - 2] = tmp;
        break;
    }

    case OP_ADD:  { uint8_t b=pop(vm), a=pop(vm); push(vm, (uint8_t)(a+b)); break; }
    case OP_SUB:  { uint8_t b=pop(vm), a=pop(vm); push(vm, (uint8_t)(a-b)); break; }
    case OP_MUL:  { uint8_t b=pop(vm), a=pop(vm); push(vm, (uint8_t)(a*b)); break; }
    case OP_XOR:  { uint8_t b=pop(vm), a=pop(vm); push(vm, a^b); break; }
    case OP_AND:  { uint8_t b=pop(vm), a=pop(vm); push(vm, a&b); break; }

    case OP_ROL:  {
        uint8_t n = code[vm->ip++] & 7, v = pop(vm);
        push(vm, (uint8_t)((v << n) | (v >> (8 - n)))); break;
    }

    case OP_CMP:  { uint8_t b=pop(vm), a=pop(vm); push(vm, a==b ? 1 : 0); break; }
    case OP_JZ:   {
        int8_t rel = (int8_t)code[vm->ip++];
        if (pop(vm) == 0) vm->ip += rel; break;
    }
    case OP_JMP:  { int8_t rel = (int8_t)code[vm->ip++]; vm->ip += rel; break; }

    case OP_CALL: {
        uint8_t hi = code[vm->ip++], lo = code[vm->ip++];
        vm->call_stack[vm->call_sp++] = vm->ip;
        vm->ip = (hi << 8) | lo; break;
    }
    case OP_RET:  vm->ip = vm->call_stack[--vm->call_sp]; break;

    case OP_HALT:  vm->exit_code = code[vm->ip++]; vm->halted = 1; break;

    default:
        fprintf(stderr, "bad opcode 0x%02X at ip=%d\n", op, vm->ip - 1);
        exit(1);
    }
}

#include "bc.c"

int main(void) {
    char buf[256];
    printf("What is the flag?: ");
    fflush(stdout);
    if (!fgets(buf, sizeof(buf), stdin)) return 1;

    size_t len = strlen(buf);
    if (len && buf[len-1] == '\n') buf[--len] = '\0';
    if (len && buf[len-1] == '\r') buf[--len] = '\0';

    VM vm;
    memset(&vm, 0, sizeof(vm));
    vm.sp = 0;

    for (size_t i = 0; i < len && i < 0xFF; i++)
        vm.mem[i] = (uint8_t)buf[i];

    vm.mem[0xFF] = (uint8_t)(len > 0xFE ? 0xFE : len);

    while (!vm.halted) inter(&vm, bc);

    puts((vm.exit_code == 0x00) ? "Correct!" : "Wrong.");

    return vm.exit_code != 0x00;
}
