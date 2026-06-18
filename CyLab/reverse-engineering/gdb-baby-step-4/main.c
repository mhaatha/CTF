#include <stdio.h>

int add() {
    return 5;
}

int main(int argc, char **argv) {
    int x;
    x = 0;

    x = add();
    return x;
}

