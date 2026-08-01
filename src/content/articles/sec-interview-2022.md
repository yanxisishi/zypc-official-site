---
title: "智邮普创工作室 SEC 组 2022 年第一次面试题"
description: "智邮普创工作室 SEC 组 2022 年第一次面试题，包含代码理解、编程实践与网络安全基础问答。"
publishedAt: 2022-10-17
category: "纳新公告"
tags:
  - SEC
  - 面试题
  - 纳新
author: "智邮普创工作室"
draft: false
---

以下内容由原面试题 PDF 整理为网页存档，题目本身未附答案。

## 0x00｜个人简历

请准备一份个人简历。

## 0x01｜程序分析

分析以下程序：

```c
#include <stdio.h>

int main()
{
    unsigned int a, b, c, d, e, f;
    a = 876543210;
    b = 876543210;
    c = 876543210;
    d = 876543210;
    e = 876543210;
    f = a + b + c + d + e;
    printf("a + b + c + d + e = %u", f);
    return 0;
}
```

## 0x02｜程序分析

分析以下程序：

```c
#include <stdio.h>

int main()
{
    char a = 0b01010101;
    char b = 0b10101010;
    char c;
    c = a ^ b + 0b10000101;
    printf("a ^ b = %c\n", c);
    printf("a ^ b = %d\n", c);
    return 0;
}
```

## 0x03｜变异水仙花数

编写一个程序：

1. 实现一个子函数，用来判断输入的数是否是变异水仙花数。
2. 在主函数中输入数字 `n`，调用子函数判断并输出 `1` 至 `n`（包括 `1` 和 `n`）内的所有变异水仙花数。`n` 最大为 10 亿。

## 0x04｜十进制转二进制

使用 C 语言编写程序，实现将任意十进制数 `n` 转换为二进制，`n` 为 `int` 型数据。

输入输出示例：

```text
输入：10
输出：1010
```

## 0x05｜程序分析

分析以下程序：

```c
#include <stdio.h>
#include <stdbool.h>

int main()
{
    int a = 2;
    int b = 3;
    bool c = ((a - 1) && b--) + a;

    if (c == 3)
        printf("Hello\n");
    else
        printf("ZYPC\n");

    return 0;
}
```

## 0x06｜输出 Congratulate

分析以下程序，并设法使其输出 `Congratulate`。此程序需要在 Linux 环境下编译运行。

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char a[0x8] = {0};
    char b[0x8] = {0};
    const char s[] = "hahaha";

    printf(
        "hello，there is a gift for you：\n"
        "a = %p\n"
        "b = %p\n"
        "Now,do what you want to do：\n",
        a,
        b
    );
    gets(a);

    if (!strncmp(b, s, 6))
        printf("Congratulate\n");

    return 0;
}
```

## 0x07｜修改字符串

在源码中修改 `s2`，使程序运行后输出 `Congradulate!`。

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char s1[50] = "hahaha";
    char s2[50] = ""; // example: char s2[50] = "abcdef";
    char s3[2] = "h";
    int i, a, b;

    for (i = 0; i < strlen(s2); i++)
    {
        a = s2[i];
        b = s3[0];
        if (a == b)
            return printf("Sorry");
    }

    if (!strncmp(s2, s1, i))
        printf("Congradulate!");
    else
        printf("Sorry\n");

    return 0;
}
```

## 0x08｜变量变化

分析以下程序，判断变量 `i` 的变化：

```c
#include <stdio.h>

int main()
{
    int n = 2, i = 9999;
    while (1)
        switch (n--)
        {
            case 0:
                printf("emmm...\n");
                return 0;
            case 1:
                i /= 10;
                break;
            case 2:
                if (i == 9999)
                    n += 2;
                break;
            case 3:
                n = 1;
            case 4:
                i = i >> 8;
        }
    return 0;
}
```

## 0x09｜选择题

分析以下程序，选择正确的选项：

```c
#include <stdio.h>

int main()
{
    char s1[20] = "abcdefghijk";
    char *s2 = &s1[5];
    char *s3 = NULL;
    char *s4 = "x";
    char *temp = NULL;

    s2++;
    s3 = ++s2;
    *s3 = *s4;
    temp = s2 + 1;
    *(s2 + 1) = *(s2 - 1);
    *(s2 - 1) = *(temp);
    puts(s2 - 4);

    return 0;
}
```

- A. `defgxijk`
- B. `cdefgxij`
- C. `defixgjk`
- D. `defgxgjk`
- E. `cdefixgj`
- F. `cdefghij`

## 0x0A｜主观题

请从下面的问题中任选五道作答：

1. 浅谈一下你对网络安全的理解。
2. 浅谈一下你对 CTF、渗透测试的认识。
3. 什么是编译型语言，什么是解释型语言，两者有何区别，C 语言是何种语言？
4. 你还了解什么语言，它们有什么特点？
5. 日常生活中有哪些现象与网络安全相关，它们分别和哪方面有关？
6. 假设你遇到网络安全相关问题，你将如何辨别以及应对？
7. 什么是白盒，什么是黑盒，什么是灰盒，什么是沙盒？
8. 第 7 题中的四种情况分别对应什么场景？
9. 浅谈一下 Web 安全和二进制安全。
10. 说说你目前了解的网络安全漏洞或计算机病毒，并浅谈其原理。
