#!/usr/bin/env bash

set -xe

CC=cc
SRC="main.c"
OUT=main

python ./assembler.py > bc.c && $CC -o $OUT $SRC
