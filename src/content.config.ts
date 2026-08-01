import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(2),
    description: z.string().min(10),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['团队动态', '技术文章', '赛事复盘', '纳新公告']),
    tags: z.array(z.string()).default([]),
    author: z.string().min(1),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const siteSettings = defineCollection({
  loader: file('./src/data/site.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    shortName: z.string(),
    description: z.string(),
    founded: z.number().int(),
    affiliation: z.string(),
    location: z.string(),
    github: z.url(),
    email: z.email().optional(),
  }),
});

const recruitment = defineCollection({
  loader: file('./src/data/recruitment.json'),
  schema: z.object({
    id: z.string(),
    qqGroup: z.string().min(5),
    wechatAccount: z.string().min(2),
  }),
});

export const collections = {
  articles,
  siteSettings,
  recruitment,
};
