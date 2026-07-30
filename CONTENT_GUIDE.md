# 官网内容维护手册

本项目的日常更新不需要修改页面组件，也不需要借助 AI。开始前先执行：

```bash
git pull
npm install
npm run dev
```

修改后在浏览器中检查，再提交：

```bash
git add .
git commit -m "更新内容说明"
git push
```

## 新建文章

运行：

```bash
npm run new:article -- article-slug "文章标题"
```

新文件会创建在 `src/content/articles/`。填写完成后把 `draft: true` 改为 `draft: false`。

文章字段：

- `title`：文章标题。
- `description`：列表页和搜索使用的摘要，至少十个字。
- `publishedAt`：发布日期，格式为 `YYYY-MM-DD`。
- `updatedAt`：可选，内容有重要更新时填写。
- `category`：只能是“团队动态”“技术文章”“赛事复盘”“纳新公告”之一。
- `tags`：用于筛选和搜索。
- `author`：作者昵称或“智邮普创工作室”。
- `draft`：为 `true` 时不会出现在页面、RSS 和 Sitemap。
- `sample`：仅维护模板使用，正式文章设为 `false`。

## 更新成员

编辑 `src/data/members.json`。复制 `templates/member-template.json` 中的对象，添加到数组并保证：

- `id` 全站唯一，只使用英文小写、数字和连字符。
- `status` 为 `mentor`、`current`、`alumni` 之一。
- 链接必须以 `https://` 开头。
- 没有获得头像或真实姓名公开授权时，不填写对应信息。
- 正式资料将 `placeholder` 设为 `false`。

成员头像放在 `public/images/members/`，推荐 WebP，单张不超过 300 KB。

## 更新荣誉

编辑 `src/data/honors.json`。必须先核实比赛名称、年月、奖项、排名和成员：

```json
{
  "id": "competition-2026",
  "year": 2026,
  "month": 10,
  "competition": "比赛全称",
  "award": "全国二等奖",
  "rank": "全国第 12 名",
  "members": ["成员昵称"],
  "track": "CTF",
  "writeupUrl": "https://example.com/writeup"
}
```

`rank` 和 `writeupUrl` 可以不填。

## 更新年度纳新信息

编辑 `src/data/recruitment.json`：

1. 更新 `cohort` 和 `qqGroup`；这两个字段会常驻显示在首页和“加入我们”页面。
2. 把当届二维码原图放到 `public/images/recruitment/`，填写必填的 `qrCode`，例如 `/images/recruitment/2026-qq.png`。
3. 根据阶段更新 `status`：`closed`、`preparing`、`open` 或 `ended`。状态只改变说明文字，不会隐藏群号和二维码。
4. 报名链接 `applyUrl` 与截止日期 `deadline` 可以不填。
5. 更新 `updatedAt`。

官网将始终展示当前届别的纳新群。即使赛程已经结束，也只需把 `status` 改为 `ended`；下一学年再统一替换届别、群号和二维码。

## 发布前检查

```bash
npm run check
npm run build
```

构建失败时先阅读错误信息。内容字段拼写、日期、无效链接或 JSON 逗号问题会在构建阶段被拦截。

当前只有一名维护者时可以直接提交 `main`。增加协作者后，建议保护 `main` 分支，所有内容通过 Pull Request 审核后合并。
