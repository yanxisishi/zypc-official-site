import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [slugInput, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(' ').trim() || '请填写文章标题';
const slug = (slugInput ?? '').trim();

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('用法：npm run new:article -- article-slug "文章标题"');
  console.error('slug 只能包含小写字母、数字和连字符。');
  process.exit(1);
}

const articleDirectory = resolve('src/content/articles');
const target = resolve(articleDirectory, `${slug}.md`);

if (existsSync(target)) {
  console.error(`文章已存在：${target}`);
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const content = `---
title: "${title.replaceAll('"', '\\"')}"
description: "请用一到两句话概括文章内容，至少十个字。"
publishedAt: ${date}
category: "技术文章"
tags: ["待补充"]
author: "作者昵称"
draft: true
sample: false
---

在这里填写文章导语。

## 第一部分

在这里填写正文。
`;

mkdirSync(articleDirectory, { recursive: true });
writeFileSync(target, content, 'utf8');
console.log(`已创建：${target}`);
console.log('完成内容后将 draft 改为 false，即可参与构建和发布。');
