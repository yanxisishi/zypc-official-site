---
title: "智邮普创工作室 SEC 组 2023 年第一次面试题"
description: "智邮普创工作室 SEC 组 2023 年第一次面试题，包含代码理解、Linux 命令分析、编程实践与网络安全问答。"
publishedAt: 2023-09-20
category: "纳新公告"
tags:
  - SEC
  - 面试题
  - 纳新
author: "智邮普创工作室"
draft: false
---

以下内容由原面试题 PDF 整理为网页存档，题目本身未附答案。

## 注意事项

- 需要编写代码的题目请在面试前思考并准备，优先使用 C 语言编写。
- 需要携带电脑到面试现场，请提前配置环境。在 Linux 环境下运行的题目需要提前安装虚拟机软件与镜像。
- 客观题的难度与顺序无关。题目由五道基础题、两道中等题、一道 Linux 指令分析题、一道 IDA 程序分析题和三道编程题组成。

## 0x00｜Introducing Yourself

介绍你自己，可以自行选择简历的形式。

内容包括但不限于姓名、班级、学号、个人经历、个人技能和自我介绍。简历可以打印，使用 Markdown 撰写可加分。

## 0x01｜函数分析

分析此函数并解释原因：

```c
int func1()
{
    int a = 10;
    int *b = &a;
    while (*b)
    {
        switch ((a++) * 2)
        {
            case 1:
                printf("This");
            default:
                printf("");
            case '_':
                printf("\x12");
                break;
            case 3:
                printf("is");
            case 2:
                printf("a");
                break;
            case 40:
                printf("zypc2023");
                break;
            case 42:
                printf("interview");
                printf("\n");
                return 0;
            case 100:
                printf("question");
        }
    }
}
```

## 0x02｜无符号整数

分析以下程序的输出并说明原因：

```c
#include <stdio.h>

int main()
{
    unsigned int a, c;
    a = 9876543210;
    c = 9 * a;
    printf("%u", c);
}
```

## 0x03｜运算符与短路求值

分析以下程序：

```c
#include <stdio.h>

int main()
{
    int x = 5;
    int y = 10;
    int z = 15;
    int result = (x++ > 5) || (--y == 9) && (z += 5);
    printf("%d %d %d %d\n", x, y, z, result);
    return 0;
}
```

## 0x04｜字符串长度

分析以下代码的输出并说明原因：

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str[] = "abc\000def\n";
    int str_len, str_size;
    str_len = strlen(str);
    str_size = sizeof(str);
    printf("%d,%d", str_len, str_size);
    return 0;
}
```

## 0x05｜输出格式

说出以下程序的输出：

```c
main()
{
    int a = 65;
    char c = 'A';
    printf("%x,%d", a, c);
}
```

## 0x06｜sizeof

分析以下代码的输出并说明原因：

```c
#include <stdio.h>

int main()
{
    char w;
    int x, result;
    float y;
    double z;
    result = sizeof(w * x + z - y);
    printf("%d", result);
    return 0;
}
```

## 0x07｜指针与字符串

分析以下程序，给出正确的输出结果：

```c
#include <stdio.h>

void swapChars(char *a, char *b)
{
    char temp = *a;
    *a = *b;
    *b = temp;
}

void modifyString(char *str)
{
    char *ptr1 = str + 1;
    char *ptr2 = str + 3;
    char *ptr3 = str + 4;
    swapChars(ptr1, ptr2);
    swapChars(ptr2, ptr3);
}

int main()
{
    char str[10] = "abcdefgh";
    char *ptr = str;

    for (int i = 0; i < 4; i++)
    {
        modifyString(ptr);
        ptr++;
    }
    printf("%s\n", str);
    return 0;
}
```

## 0x08｜Linux 命令分析

Linux 是计算机领域常见的操作系统门类。请分析以下 Linux 命令行操作：

```bash
curl -LO https://xupt.edu.cn/ZYPC_php_program.zip && \
unzip ZYPC_php_program.zip -d /tmp/zypc && \
rm ZYPC_php_program.zip && \
find /tmp/zypc -type f -exec chmod 644 {} \; && \
sed -i 's/flag{/zypc_flag{/g' /tmp/zypc/src/*.php && \
mv /tmp/zypc/src/* /www && \
git add . && \
tar -czvf new_archive.tar.gz /www 2>&1 | \
tee bash_log.txt | \
grep "docker" > result.txt && \
vim result.txt
```

提示：可以尝试将命令拆解，再逐一分析。

可选思考：

1. `sed` 中的替换字符串为什么使用 `/` 作为分隔符？能否使用其他字符分隔？
2. 修改文件权限时，为什么需要配合 `find`？能否直接使用 `chmod` 修改整个目录的权限？
3. 这段命令的用途可能是什么？

## 0x09｜Linux 可执行文件逆向分析

分析题目所给文件，在 Linux 系统运行并与其交互，使其输出 `Right!`。

[原题附件链接](https://pan.baidu.com/s/1aRANSfqqK66vcJmXx5ZuBg?pwd=zypc)（历史链接，可能已经失效）

提示：

- 由于条件限制，文件名经过修改，你需要将其还原。
- 你可能需要了解 Linux 文件后缀名。

## 0x0A｜编程题

三道编程题中，Check A 和 Check B 为必做，Check C 为选做。

### Check A｜字数统计

编写一个程序，实现一个子函数，用来计算输入字符串中的单词个数。单词之间由一个或多个空格分隔，不考虑标点符号。

在主函数中输入一个字符串，然后调用子函数计算并输出该字符串中的单词个数。

### Check B｜Fibonacci Sequence

请编写一个递归函数，计算斐波那契数列的第 `N` 项（`N > 0`）。尽可能使函数高效，仅需编写核心代码部分。

```c
#include <stdio.h>

unsigned long long fibonacci(int n)
{
    // 在这里编写函数
}

int main()
{
    int n = 50;
    unsigned long long result = fibonacci(n);
    printf("Fibonacci(%d) = %llu\n", n, result);
    return 0;
}
```

### Check C｜对话问答（选做）

假如你是一位客服，需要对客户的提问进行回答。在用户的两次提问间隔中，允许有一次或多次回答，但每一次提问后至少要有一个回答，才可以解除客户的疑问。

输入规则：

- 第一行为测试次数，即对话组数。
- 每组的第一行是该组对话的问答次数总和。
- 下一行是具体对话，`A` 代表 Answer，`Q` 代表 Question。
- 第一个字母始终为 `Q`。

对于每组对话，判断其是否符合要求，符合则输出 `Yes`，反之输出 `No`。

```text
输入：
5
4
QQAA
4
QQAQ
3
QAA
1
Q
14
QAQQAQAAQQQAAA

输出：
Yes
No
Yes
No
Yes
```

样例解释：

1. 第一组有两个问题、两个回答，问题数等于回答数，输出 `Yes`。
2. 第二组有三个问题、一个回答，问题数大于回答数，输出 `No`。
3. 第三组有一个问题、两个回答，问题数小于回答数，输出 `Yes`。
4. 第四组只有问题没有回答，输出 `No`。
5. 第五组每一个 `Q` 都有一个 `A` 解决，输出 `Yes`。

## 0x0B｜主观部分

在以下题目中选择五道作答：

1. 浅谈你对网络安全的理解。
2. 谈谈你对 CTF 竞赛和渗透测试的理解。
3. 你学习过什么编程语言？浅谈你对它的认知和它的优缺点。
4. 什么是解释性语言，什么是编译性语言？浅谈它们的区别。
5. 谈谈你了解的 Web 安全漏洞或二进制安全漏洞，并解释它们的原理。
6. 什么是白盒测试、灰盒测试和黑盒测试？浅谈它们的区别。
7. 假如你需要爆破一个八位纯数字 PIN 码，服务器每秒可尝试十次，PIN 码在 12 小时内有效，讲讲你的 PIN 码获取思路。
8. CTF 竞赛中常见的类型有很多，例如 Pwn、Web、Crypto 等。请选择其中一种类型，简要介绍其基本原理和你解决相关题目的方法。
9. 请解释什么是漏洞利用（Exploit），讨论漏洞利用在黑客攻击中的作用，并探讨预防漏洞利用的方法。
10. 网络安全是一个不断演进的领域，新的威胁和安全技术层出不穷。请谈谈你如何保持对网络安全知识的更新和学习。
