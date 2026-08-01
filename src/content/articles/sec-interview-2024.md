---
title: "智邮普创工作室 SEC 组 2024 年第一次面试题"
description: "智邮普创工作室 SEC 组 2024 年第一次面试题，包含 C 语言基础、编程实践、CTF 方向题与网络安全问答。"
publishedAt: 2024-09-01
category: "纳新公告"
tags:
  - SEC
  - 面试题
  - 纳新
author: "智邮普创工作室"
draft: false
---

以下内容由原面试题 PDF 整理为网页存档，题目本身未附答案。

本次面试题分为简答题、实践题、自选题和问答题：

- 简答题要求理解问题并回答。
- 实践题需要按照要求编写 C 语言代码。
- 自选题考查 CTF 不同方向的基础知识，只需选择一个方向作答。
- 问答题需要按照题目叙述作答。

## 简答题

### 0x00｜自增符的使用（难度：1）

请讲解前缀自增 `++i` 和后缀自增 `i++` 的区别。

### 0x01｜包含头文件（难度：1）

请简述 `#include <stdio.h>` 和 `#include "stdio.h"` 这两种写法的区别。

### 0x02｜简单的递归（难度：1）

分析如下代码，简述其运行原理及递归的原理：

```c
void printnum(long num)
{
    if (num < 0)
    {
        putchar('-');
        num = -num;
    }
    if (num / 10)
    {
        printnum(num / 10);
    }
    putchar("0123456789"[num % 10]);
}
```

### 0x03｜2B 的运算符（难度：2）

分析如下代码并给出合理解释：

```c
#include <stdio.h>

int main()
{
    int a = 1;
    int b = 1;

    if (a+++b)
    if (a*!~b)
        b++;
    else
        a++;

    printf("%d %d %d\n", a, b, a++-+-+-+-++b);

    return 0;
}
```

### 0x04｜静态变量和全局变量的区别（难度：2）

请简述在 C 语言中静态变量与全局变量之间的主要区别。

### 0x05｜静态变量（难度：2）

请测试以下代码，并讲解输出结果产生的原因：

```c
#include <stdio.h>

void func()
{
    static int count = 0;
    int local = 0;
    count++;
    local++;
    printf("count = %d, local = %d\n", count, local);
}

int main()
{
    for (int i = 0; i < 3; i++)
    {
        func();
    }
    return 0;
}

// output
// count = 1, local = 1
// count = 2, local = 1
// count = 3, local = 1
```

### 0x06｜结构体内存对齐（难度：3）

根据以下 C 语言结构体定义回答问题。在 GCC 编译器默认配置下，不考虑优化及 `#pragma pack` 等影响内存对齐的指令。

```c
struct MyStruct
{
    char a;     // 1 字节
    int b;      // 4 字节
    char c;     // 1 字节
    double d;   // 8 字节
    short e;    // 2 字节
};
```

1. 该结构体在 32 位和 64 位系统上的大小分别是多少？请解释原因。
2. 如果希望优化该结构体的内存布局，应该如何重新排列这些字段？重新排列后的结构体在 32 位和 64 位系统上的大小分别是多少？
3. 解释结构体对齐的原则，以及为什么需要进行结构体对齐。

### 0x07｜指针（难度：4）

请测试以下代码，分析程序错误的原因并修正错误：

```c
#include <stdio.h>
#include <stdlib.h>

void process(int *ptr, int size)
{
    // 动态分配一个整型数组，大小为 size
    int *array = (int *)malloc(size * sizeof(int));

    // 初始化数组
    for (int i = 0; i < size; i++)
        array[i] = i * i;

    // 将 ptr 指向动态分配的数组
    ptr = array;
}

int main()
{
    int *ptr = NULL;
    int size = 5;

    process(ptr, size);

    // 打印 ptr 指向的数组元素
    for (int i = 0; i < size; i++)
        printf("%d ", ptr[i]);

    free(ptr);

    return 0;
}
```

## 实践题

### 0x08｜求平均数（难度：1）

实现一个函数，该函数接收一个整数数组和数组大小作为参数，返回数组中所有元素的平均值。

详细要求：

1. 函数名为 `average`。
2. 函数的参数为一个整数数组 `arr` 和一个整数 `size`，表示数组大小。
3. 函数返回一个 `double` 类型的值，即数组元素的平均值。
4. 考虑整数除法的问题，计算平均值时请确保结果为小数。
5. 编写一个简单的 `main` 函数测试 `average` 函数。

### 0x09｜温度转换器（难度：2）

编写一个 C 程序，实现一个简单的温度转换器，将摄氏温度转换为华氏温度。程序应从命令行接收一个摄氏温度值，并打印对应的华氏温度值。

详细要求：

1. 程序应从命令行读取一个浮点数，表示摄氏温度。
2. 使用公式 `华氏温度 = (摄氏温度 × 9 / 5) + 32` 进行转换。
3. 打印转换后的华氏温度，保留两位小数。
4. 如果输入不是有效的浮点数，程序应打印错误信息并退出。
5. 编写一个简单的 `main` 函数测试温度转换器。

### 0x0A｜文本加密器（难度：3）

实现一个简单的文本文件加密器。

详细要求：

1. 编写一个程序，实现简单的文本文件加密功能。
2. 程序应从命令行接收两个参数：源文件名和目标文件名。
3. 加密算法使用凯撒加密，对字母进行加密。
4. 程序应能正确处理文件读写错误等情况。
5. 编写一个简单的 `main` 函数测试加密器。

## 方向自选题

以下方向只需选择一个作答。

### Pwn

请简述段和节的区别和联系。

### Reverse

阅读以下汇编代码，可借助 AI 等工具，结合注释提示，将汇编代码大致翻译为对应的 C 语言代码。

```asm
push   rbp
mov    rbp, rsp       ; 以上两句为标准函数头
sub    rsp, 30h       ; 开辟局部变量的栈存储空间
call   __main         ; 忽略
mov    [rbp+i], 0     ; [rbp+i] 为循环变量 i
jmp    short Label1   ; 可忽略 short

Label2:               ; CODE XREF:main+2F↓j
mov    eax, [rbp+i]
mov    edx, eax       ; edx 存储第一个参数
lea    rcx, add       ; rcx 存储第二个参数
call   printf         ; 以上四条指令为函数调用
add    [rbp+i], 1
Label1:               ; CODE XREF:main+14↑j
cmp    [rbp+i], 4
jle    short Label2
mov    eax, 0
add    rsp, 30h       ; 恢复局部变量的栈存储空间
pop    rbp
retn                  ; 以上两句为标准函数尾
```

### Crypto

简述 RSA 加密过程。

### Misc

如果题目附件是一张图片，你有什么做题思路？

### Web

文件上传中 `%00` 截断的原理是什么？利用的前提条件是什么？

## 问答题

1. 在 Kerberos 安全认证流程中，客户端依次向哪三方进行了请求？
2. 什么是网络端口？常见的端口有哪些？
3. IP 地址与域名的关系是什么？
4. 简述进程、线程和协程的区别。
5. 什么是渗透测试？简述渗透测试的几个步骤。
6. 简述什么是“近源攻击”。
7. 网卡有哪些工作模式？简述这些工作模式。
8. 简述模糊测试（Fuzzing）的原理，并解释它属于黑盒测试、白盒测试还是灰盒测试。
