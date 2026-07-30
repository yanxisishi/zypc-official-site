# 宝塔面板部署与自动更新

官网是纯静态 Astro 站点。服务器只需要在更新时运行 Node.js 构建，访问网站时由 Nginx 直接提供 `dist` 文件，不需要数据库或常驻 Node 进程。

宝塔官方流程参考：[克隆 Git 仓库创建网站并实现自动更新](https://docs.bt.cn/practical-tutorials/create-from-git-website)。

## 部署前检查

1. 本地执行 `npm ci && npm run check && npm run build`。
2. 代码已推送到 GitHub 的 `main` 分支。
3. 宝塔终端能访问 GitHub 和 npm：

   ```bash
   git ls-remote https://github.com/你的账号/你的仓库.git
   npm ping
   ```

4. 在宝塔“软件商店”安装 Nginx、Node.js 版本管理器与 Webhook 插件。
5. 选择 Node.js 22 LTS 或更新的受支持版本，并设置为命令行版本。

## 使用 Git 创建网站

1. 打开“网站 → 添加站点 → Git 创建”。
2. 网站目录填写 `/www/wwwroot/zypc-site`，首次创建时必须为空。
3. 填写仓库 SSH 地址与分支 `main`。
4. 将宝塔生成的公钥添加到 GitHub 仓库的 `Settings → Deploy keys`，只授予只读权限。
5. 完成创建后，把 Nginx 站点根目录设置为：

   ```text
   /www/wwwroot/zypc-site/dist
   ```

不要把仓库根目录直接暴露给 Nginx，否则可能公开源码和 `.git`。

## Webhook 构建脚本

在“网站设置 → Git 管理 → 仓库脚本”填写：

```bash
set -e
cd /www/wwwroot/zypc-site
npm ci --no-audit --no-fund
npm run check
npm run build
```

宝塔会先拉取仓库，再执行脚本。`set -e` 可在检查或构建失败时停止发布，避免把明显错误的版本上线。

复制宝塔生成的 Webhook URL，在 GitHub 仓库 `Settings → Webhooks → Add webhook` 中配置：

- Content type：`application/json`
- Events：只选 Push
- 分支：发布流程只使用 `main`
- SSL verification：正式域名和证书配置完成后必须启用

以后本地执行：

```bash
git add .
git commit -m "官网内容更新"
git push
```

GitHub 会通知宝塔，宝塔自动拉取、检查并构建，Nginx 随即提供新 `dist`。

## 故障排查

1. GitHub Webhook 页面查看 `Recent deliveries` 是否为 2xx。
2. 宝塔 Git 管理查看 Webhook 与构建日志。
3. 执行 `node --version`、`npm --version` 和 `git status`。
4. npm 下载失败时检查学校服务器的出站网络、DNS 和代理。
5. 构建失败不会修改 Git 历史；修复后再次 `git push` 即可。

如果服务器无法稳定访问 GitHub 或 npm，改用 GitHub Actions 构建 `dist`，再通过 SSH/rsync 上传静态产物。日常编辑流程仍然保持 `git push`。

## 域名与 HTTPS

本地验收完成后再处理：

1. 由学校信息中心确认子域名和 DNS。
2. 宝塔站点绑定域名，放通 80/443。
3. 申请或导入对应域名证书。
4. 开启 HTTPS 强制跳转。
5. 把 `astro.config.mjs`、`public/robots.txt` 中的示例域名替换为正式域名，再重新构建。
