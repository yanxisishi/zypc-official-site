export interface HonorEntry {
  month: number;
  competition: string;
  award: string;
  rank?: string;
  track: string;
  members?: string[];
  url?: string;
}

export interface HonorYearGroup {
  year: number;
  entries: HonorEntry[];
}

/**
 * 维护说明
 *
 * 1. 在已有年份中添加荣誉：复制 entries 里的一个对象并修改内容。
 * 2. 添加新年份：复制完整的年份分组；页面会自动按年份、月份倒序排列。
 * 3. rank、members、url 都可以省略；url 只填写正式公开的赛事记录或复盘链接。
 */
const honorGroups: HonorYearGroup[] = [
  // #region 2025 年
  {
    year: 2025,
    entries: [
      {
        month: 6,
        competition: 'OpenHarmony CTF 预赛',
        award: '晋级决赛',
        rank: '全国第 11 名',
        track: 'CTF',
        members: ['Am0unt', 'Wald', 'TUTo', 'Yogurt'],
      },
      {
        month: 6,
        competition: '第三届“盘古石杯”全国电子数据取证大赛',
        award: '全国二等奖',
        rank: '全国第 14 名',
        track: '电子数据取证',
        members: ['k1sme4', 'g0ubu1i', 'Mingyi'],
      },
      {
        month: 5,
        competition: '第十八届全国大学生软件创新大赛·软件系统安全赛',
        award: '两项全国二等奖',
        track: '软件系统安全',
        members: ['k1sme4', 'fault', 'Wald', 'TUTo', 'auto'],
      },
      {
        month: 4,
        competition: '第二届“长城杯”信息安全铁人三项赛决赛',
        award: '全国三等奖',
        rank: '全国第 50 名',
        track: '综合安全',
        members: ['g0ubu1i', 'Wald', 'Mingyi', 'dmw'],
      },
    ],
  },
  // #endregion
];

export default honorGroups;
