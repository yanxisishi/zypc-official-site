---
title: "智邮普创工作室 SEC 组 2025 年第一次面试题"
description: "智邮普创工作室 SEC 组 2025 年第一次面试题，包含代码理解、编程实践、CTF 方向题与网络安全问答。"
publishedAt: 2025-09-23
category: "纳新公告"
tags:
  - SEC
  - 面试题
  - 纳新
author: "智邮普创工作室"
draft: false
---

以下内容由原面试题 PDF 整理为网页存档，题目本身未附答案。

本次面试题分为代码理解题、编程实践题、方向自选题和主观问答题：

- 代码理解题要求理解代码并回答问题。
- 编程实践题要求按要求编程、回答问题并完成测试。
- 方向自选题考查 CTF 不同方向的基础知识，只需选择一个方向作答。
- 主观问答题需要在八道题中至少选择五道作答。
- 代码理解题与编程实践题中设有隐藏问题，面试时会进一步提问。
- 参加面试时请携带纸质版简历。

## 代码理解题

### 0x00｜头顶怎么尖尖的（难度：1）

```c
#include <stdio.h>

int main()
{
    int a = 1;
    int b = 4;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("a=%d, b=%d\n", a, b);
    return 0;
}
```

问题：输出结果是什么？为什么？

### 0x01｜这就是乱码吗（难度：1）

```c
#include <stdio.h>

int main()
{
    int a = 6, b = 7;
    a += b--;
    b--;
    printf("a=%d, b=%d\n%d", a, b, a|b&a%b);
    return 0;
}
```

问题：输出结果是什么？为什么？

### 0x02｜就说半句（难度：2）

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int a = -131070;
    unsigned short b = a;
    char str[] = {
        'w', 'e', 'l', 'l', 'c', 'o', 'm', 'e', '\x00',
        't', 'o', '\x00', 'z', 'y', 'p', 'c'
    };

    for (int i = b; i < strlen(str) + b; i++)
    {
        printf("%c", str[i]);
    }

    return 0;
}
```

问题：输出结果是什么？为什么？

### 0x03｜怎么两个文件（难度：3）

`main` 文件：

```c
#include "stdio.c"

int main()
{
    char hello[] = "wellcome_to_zypc";
    char *encoded = encode(hello);
    printf("Encoded: %s\n", encoded);
    free(encoded);
    return 0;
}
```

`stdio.c` 文件：

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

const char what_is_this[] =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

size_t outputlen(size_t inputlen)
{
    return ((inputlen + 2) / 3) * 4;
}

char *encode(char *input)
{
    if (!input) return NULL;
    int sizelen = strlen(input);
    char *output = (char)malloc(outputlen(sizelen) + 1);
    char first, second, third;

    for (int i = 0, j = 0; i < sizelen; i += 3)
    {
        first = input[i];
        second = (i + 1 < sizelen) ? 0 : input[i + 1];
        third = (i + 2 < sizelen) ? 0 : input[i + 2];
        output[j++] = what_is_this[first >> 2];
        output[j++] = what_is_this[((first & 0x03) << 4) | (second >> 4)];
        output[j++] = (i + 1 < sizelen)
            ? what_is_this[((second & 0x0f) << 2) | (third >> 6)]
            : '=';
        output[j++] = (i + 2 < sizelen) ? what_is_this[third & 0x3f] : '=';
        output[outputlen(sizelen) + 1] = '\0';

        return output;
    }
}
```

问题：理解以上代码，输出结果是什么？为什么？

### 0x04｜到底多大（难度：2）

```c
#include <stdio.h>

typedef struct hello {
    int *z;
    double y;
    char p;
    float c;
} hello;

typedef union zypc {
    int z;
    char y;
    short p;
    float c;
} zypc;

typedef struct hello_zypc {
    hello h;
    zypc z;
} hello_zypc;

int main()
{
    hello_zypc hz;
    hello h;
    zypc z;
    printf("%zu, %zu, %zu\n", sizeof(h), sizeof(z), sizeof(hz));
    return 0;
}
```

问题：输出结果是什么？为什么？

### 0x05｜疯狂打印（难度：4）

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
    printf("%ld\n", sizeof(a[0]));
    printf("%ld\n", sizeof(*(a + 1)));
    printf("%ld\n", sizeof(*(&a[0])));
    printf("%ld\n", sizeof(&a));

    int *p[3];
    p[0] = a[0];
    p[1] = a[1];
    p[2] = a[2];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ", *(*(p + i) + j));
        }
    }
    return 0;
}
```

问题：输出结果是什么？为什么？

## 编程实践题

### 0x06｜梦回高中（难度：3）

实现一个函数，该函数接收一个整数数组和数组大小作为参数，返回数组中所有元素的方差。

要求：

1. 函数返回一个 `double` 类型的值，即数组元素的方差。
2. 具体叙述代码原理和设计原理。
3. 面试时会使用三组 UTF-8 编码的数据测试代码，请尽可能通过更多测试。

输入输出示例：

```text
输入：
3
12 13 14

输出：
0.666667
```

### 0x07｜灌栏高手（难度：4）

请用代码完成栅栏加密。

要求：

1. 保留读取 `.txt` 文件的接口，并设置可修改偏移量的接口。
2. 具体叙述代码原理和设计原理。
3. 面试时会使用三个 UTF-8 编码的文件测试代码，请尽可能通过更多测试。

### 0x08｜混乱的春游（难度：5）

小学春游时，你是一个班级的领队。此时小学生们正在乱哄哄地通过独木桥，突然校长来电告知上游发洪水了。为了安全，同学们必须撤下独木桥。

独木桥长度为 600，小朋友只能停留在整数坐标处，所有人的速度均为每秒一个单位长度。当一个小朋友到达坐标 `0` 或 `601` 时，他就离开独木桥。如果两个小朋友相撞，例如一人从坐标 `300` 朝 `0` 前进，另一人从坐标 `299` 朝 `601` 前进，二者会在 `299.5` 处相撞，然后回到原来的位置背向而立，共用时一个单位时间。随后二人分别转身向另一方向行走，转身不需要时间。

由于现场混乱，你无法看清每个人最初面对的方向。请计算队伍全部下桥所需的最短时间和最长时间。

请保留两个接口并说明程序设计。面试时会使用三组数据判断程序是否正确。每组数据包含两个部分：桥上小朋友的数量，以及每个小朋友的初始坐标。

输入输出示例：

```text
输入：
2
80 500

输出：
101 521
```

## 方向自选题

以下方向只需选择一个作答。

### Misc

1. 请简述压缩包破解的几个方向，并讲出它们的原理。
2. 请简述你所知道的隐写种类，越多越好。

### Crypto

1. 简述 RSA 的加解密原理。
2. 解释欧几里得算法与扩展欧几里得算法的原理。

### Web

1. 简单讲解反斜杠绕过、双写绕过的原理。
2. 简单讲解你知道的文件上传绕过方法。讲出五种且理解原理即为满分。

### Pwn

1. 请具体叙述你对栈的理解。
2. 请具体叙述链表这一数据结构。

### Reverse

通过学习 C 语言，你已经掌握了使用 `while`、`for`、`do while` 等语法实现循环。在逆向工程分析中，通过 IDA 生成的框图了解程序逻辑与执行流程也是一项重要能力。请根据下方框图和代码完成问题：

1. `for` 循环、`while` 循环和 `do while` 循环的区别是什么？
2. 三组框图所代表程序逻辑的输出结果分别是什么？
3. 下方代码对应 A、B、C 中的哪个选项？请简述理由。有能力者可尝试从汇编角度解释。

提示：可尝试寻找不同框图中的相似图块，分析它们实现的逻辑。

```c
#include <stdio.h>

int main()
{
    int num = 0;
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            num++;
        }
    }
    printf("%d", num);
    return 0;
}
```

![三组循环控制流图](/images/articles/sec-interview-2025/loop-flowcharts.png)

## 主观问答题

请从以下八道题中至少选择五道作答：

1. 什么是白盒、黑盒、灰盒和沙盒？浅谈它们的区别。
2. 在 Kerberos 安全认证流程中，客户端依次向哪三方进行了请求？
3. 浅谈 Web 安全和二进制安全。
4. OSI 模型分为哪几层？请按顺序说出。
5. 什么是防火墙？常见的防火墙技术有哪些？
6. 网卡有哪些工作模式？简述这些工作模式。
7. 什么是欺骗攻击？欺骗攻击有哪些？
8. 什么是编译型语言，什么是解释型语言？二者有何区别？C 语言属于哪一种？
