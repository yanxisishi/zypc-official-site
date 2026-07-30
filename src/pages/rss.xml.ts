import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL }) {
  const articles = (await getCollection('articles'))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: '智邮普创工作室文章',
    description: '团队动态、技术文章、赛事复盘与纳新公告。',
    site: context.site ?? 'https://zypc.example.com',
    customData: '<language>zh-CN</language>',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/articles/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
      author: article.data.author,
    })),
  });
}
