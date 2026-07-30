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
    sample: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: file('./src/data/members.json'),
  schema: z.object({
    id: z.string(),
    nickname: z.string().min(1),
    cohort: z.string(),
    status: z.enum(['mentor', 'current', 'alumni']),
    directions: z.array(z.string()).min(1),
    avatar: z.string().optional(),
    github: z.url().optional(),
    blog: z.url().optional(),
    placeholder: z.boolean().default(false),
    order: z.number().int().default(100),
  }),
});

const honors = defineCollection({
  loader: file('./src/data/honors.json'),
  schema: z.object({
    id: z.string(),
    year: z.number().int().min(2013),
    month: z.number().int().min(1).max(12),
    competition: z.string().min(2),
    award: z.string().min(1),
    rank: z.string().optional(),
    members: z.array(z.string()),
    track: z.string(),
    writeupUrl: z.url().optional(),
  }),
});

const research = defineCollection({
  loader: file('./src/data/research.json'),
  schema: z.object({
    id: z.string(),
    index: z.string(),
    title: z.string(),
    english: z.string(),
    summary: z.string(),
    category: z.enum(['security', 'engineering']),
    topics: z.array(z.string()),
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
    status: z.enum(['closed', 'preparing', 'open', 'ended']),
    cohort: z.string(),
    summary: z.string(),
    qqGroup: z.string().min(5),
    qrCode: z.string().startsWith('/'),
    applyUrl: z.url().optional(),
    deadline: z.coerce.date().optional(),
    updatedAt: z.coerce.date(),
  }),
});

export const collections = {
  articles,
  members,
  honors,
  research,
  siteSettings,
  recruitment,
};
