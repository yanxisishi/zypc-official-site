# 智邮普创工作室官网

智邮普创工作室官网基于 Astro 构建，输出为纯静态文件。文章、成员、荣誉和联系方式都直接保存在仓库中，不依赖数据库或后台管理系统。

- 站内维护文档：`/maintenance/`
- 本地访问地址：`http://localhost:4321/`
- 正式构建目录：`dist/`

## 环境与本地运行

建议使用 Node.js 22 LTS 和随 Node.js 安装的 npm。

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321/`。常用命令如下：

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器并自动刷新 |
| `npm run check` | 检查 Astro、TypeScript 和内容字段 |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览已经构建的生产版本 |
| `npm run new:article -- article-slug "文章标题"` | 创建一篇文章草稿 |

开始修改前先执行 `git status`，确认当前改动来源，避免覆盖其他维护者尚未提交的内容。

## 项目结构与内容位置

日常内容更新主要集中在以下位置：

| 路径 | 内容 |
| --- | --- |
| `src/content/articles/` | Markdown 文章正文与 Frontmatter |
| `src/data/members.ts` | 成员届别、昵称、方向和公开联系方式 |
| `src/data/honors.ts` | 竞赛荣誉、排名、成员和公开链接 |
| `src/data/recruitment.json` | 微信公众号名称和纳新 QQ 群号 |
| `src/data/site.json` | 团队名称、简介、地点、GitHub 和公开邮箱 |
| `src/pages/` | 各页面结构和页面专属样式 |
| `src/components/` | 多个页面共用的组件 |
| `src/styles/` | 全局样式、主题变量和首页样式 |
| `public/images/` | 文章、团队和页面使用的图片 |
| `public/downloads/` | 需要提供下载的 PDF 等静态文件 |

不要直接修改 `dist/`。该目录由 `npm run build` 重新生成，手工改动会在下次构建时丢失。

## 新建与更新文章

使用脚本创建文章草稿：

```bash
npm run new:article -- article-slug "文章标题"
```

`article-slug` 只能包含小写字母、数字和连字符，并会成为文章 URL 的一部分。已有文章不要随意改名，否则原链接会失效。

文章的 Frontmatter 示例：

```yaml
---
title: "文章标题"
description: "用于文章列表和搜索结果的一到两句话摘要。"
publishedAt: 2026-08-01
category: "技术文章"
tags: ["Web", "复盘"]
author: "作者昵称"
draft: true
cover: "/images/articles/example/cover.webp"
---
```

字段说明：

| 字段 | 说明 |
| --- | --- |
| `title` | 文章标题 |
| `description` | 列表页和搜索使用的摘要，至少十个字 |
| `publishedAt` | 发布日期，格式为 `YYYY-MM-DD` |
| `updatedAt` | 可选；文章有重要更新时填写 |
| `category` | `团队动态`、`技术文章`、`赛事复盘` 或 `纳新公告` |
| `tags` | 标签数组，列表页最多显示三个 |
| `author` | 作者昵称或“智邮普创工作室” |
| `draft` | `true` 时不进入文章列表、RSS 和 Sitemap |
| `cover` | 可选；填写 `public` 目录下资源对应的站内路径 |

完成正文并在本地检查后，将 `draft` 改为 `false`。文章字数会在构建时自动计算，不需要手工填写。封面不是必填项；没有合适图片时保留纯文字卡片即可。

发布技术文章、比赛复盘、人员照片或署名前，必须确认内容允许公开。真实姓名、头像和个人联系方式只有在本人同意后才能发布。

## 更新成员与荣誉

### 成员

编辑 `src/data/members.ts`，在对应届别的 `entries` 数组中追加成员。主要字段如下：

```ts
{
  nickname: '昵称',
  sitenick: 'web',
  title: '页面显示名称',
  directions: ['Web 安全'],
  avatar: '/images/members/example.webp',
  qq: '公开 QQ 号',
  github: 'GitHub 用户名',
  blog: 'https://example.com/',
}
```

`avatar`、`qq`、`github` 和 `blog` 都可以省略。新增届别时复制完整年份分组，并保持年份格式一致。

### 荣誉

编辑 `src/data/honors.ts`，在对应年份的 `entries` 数组中添加记录：

```ts
{
  month: 10,
  competition: '比赛全称',
  award: '全国二等奖',
  rank: '全国第 12 名',
  track: 'CTF',
  members: ['成员昵称'],
  url: 'https://example.com/writeup',
}
```

`rank`、`members` 和 `url` 可以省略。页面会按年份和月份倒序显示。发布前应核实比赛名称、日期、奖项、排名和参赛成员，链接只填写已经公开的正式页面或复盘。

## 更新联系方式与站点信息

- `src/data/recruitment.json`：维护 `qqGroup` 和 `wechatAccount`。
- `src/data/site.json`：维护团队名称、简称、简介、成立年份、归属、地点、GitHub 和可选邮箱。
- `src/pages/join.astro`：维护安全组流程、准备建议、开发组说明和常见问题。

加入页面不维护报名状态、截止日期、倒计时或二维码。具体场次和当届安排以公众号与纳新 QQ 群通知为准。开发组信息没有确认前不要自行补写技术栈或选拔流程。

## 图片、PDF 与静态资源

放入 `public/` 的文件会按原路径直接发布，例如：

- `public/images/articles/example/cover.webp` 对应 `/images/articles/example/cover.webp`
- `public/downloads/example.pdf` 对应 `/downloads/example.pdf`

图片应先压缩，照片优先使用 WebP；不要提交无关原图、临时截图或包含未授权个人信息的文件。替换资源后检查桌面端、移动端和深色模式下的显示效果。

历年面试题原 PDF 位于 `public/downloads/interviews/`。文件名与加入页面的下载链接有关，修改文件名时必须同步更新 `src/pages/join.astro`。

## 检查、构建与提交

每次提交前至少运行：

```bash
npm run check
npm run build
```

涉及页面结构或样式时，还应在桌面端和移动端检查浅色、深色、键盘焦点、页面跳转和横向溢出。构建完成后可运行：

```bash
npm run preview
```

确认无误后检查实际改动，再提交：

```bash
git status
git diff
git add <本次修改的文件>
git commit -m "说明本次修改"
git push
```

不要在未检查改动范围时直接覆盖文件或提交他人的未完成修改。

## 部署说明

网站采用纯静态构建。部署平台应安装锁定依赖、完成检查与构建，然后发布 `dist/`：

```bash
npm ci --no-audit --no-fund
npm run check
npm run build
```

Nginx 或静态托管平台只需要提供 `dist/`，不要把仓库根目录、`.git`、源码或环境文件暴露为网站目录。正式部署前应把 `astro.config.mjs` 中的 `site` 改为实际域名，以保证 RSS 和 Sitemap 使用正确地址。

构建失败时不要继续替换线上文件。先查看完整日志，并依次检查 Node.js/npm 版本、依赖安装、内容字段、静态资源路径和服务器网络。

## 安全与交接

- 不要把密码、私钥、Cookie、Webhook 密钥或服务器凭据写进仓库。
- 不要删除或重命名已有文章和公开资源，除非已经安排重定向或同步修改引用。
- 公开成员资料、文章署名和照片前确认授权，必要时使用昵称和打码图片。
- 交接仓库、域名和部署平台权限时使用平台的成员权限，不在聊天记录中发送私钥。
- 向下一位维护者说明未发布草稿、待确认资料、部署方式和当前工作区中的未提交修改。
- 交接完成前，让接手者独立完成一次本地启动、内容修改、检查和构建。
