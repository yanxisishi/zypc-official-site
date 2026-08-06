export interface MemberEntry {
  nickname: string;
  sitenick?: string;
  title?: string;
  directions: string[];
  avatar?: string;
  qq?: string;
  github?: string;
  blog?: string;
}

export interface MemberGroup {
  cohort: string;
  desc: string;
  entries: MemberEntry[];
}

const memberGroups: MemberGroup[] = [
  // #region 2021 届
  {
    cohort: '2021',
    desc: '2021 年加入',
    entries: [
      {
        nickname: 'Y0ung_',
        sitenick: 'Reverse, Misc',
        title: 'Y0ung_',
        directions: ['Reverse', 'Misc'],
        github: 'Y0ungS',
        blog: 'https://y0ungs.github.io/',
      },
    ],
  },
  // #endregion

  // #region 2022 届
  {
    cohort: '2022',
    desc: '2022 年加入',
    entries: [
      {
        nickname: 'fault',
        sitenick: 'Web, 渗透',
        title: 'fault',
        directions: ['Web', '渗透'],
        github: 'fault123',
        blog: 'https://fault.thisis.host/',
      },
      {
        nickname: 'k1sme4',
        sitenick: 'Misc',
        title: 'k1sme4',
        directions: ['Misc'],
        github: 'k1sme4',
        blog: 'https://fault.thisis.host/',
      },
      {
        nickname: 'daaihang',
        sitenick: 'Reverse',
        title: 'daaihang',
        directions: ['Reverse'],
        github: 'daaihang',
        blog: 'https://wdh.hk',
      },
      {
        nickname: 'Am0unt',
        sitenick: '渗透',
        title: 'Am0unt',
        directions: ['渗透'],
      },
    ],
  },
  // #endregion

  // #region 2023 届
  {
    cohort: '2023',
    desc: '2023 年加入',
    entries: [
      {
        nickname: 'g0ubu1i',
        sitenick: 'Crypto',
        title: 'g0ubu1i',
        directions: ['Crypto'],
        github: 'g0ubu1i',
        blog: 'https://blog.goubuli.online',
      },
      {
        nickname: 'waterbucket',
        sitenick: 'Web, Dev',
        title: 'waterbucket',
        directions: ['Web', 'Dev'],
        github: 'WaterBucket0819',
        blog: '',
      },
      {
        nickname: 'Mingyi',
        sitenick: 'Misc',
        title: 'Mingyi',
        directions: ['Misc'],
        github: 'DayDayDayDreaming',
        blog: '',
      },
      {
        nickname: 'Wald',
        sitenick: 'Mobile, Pwn',
        title: 'Wald',
        directions: ['Mobile', 'Pwn'],
        github: 'shareLanb',
        blog: '',
      },
      {
        nickname: 'dmw',
        sitenick: 'Web',
        title: 'dmw',
        directions: ['Web'],
        github: 'dmwww',
        blog: '',
      },
      {
        nickname: 'TUTo',
        sitenick: 'Pwn',
        title: 'TUTo',
        directions: ['Pwn'],
        github: 'TUTo-Y',
        blog: '',
      },
      {
        nickname: 'auto',
        sitenick: 'Reverse',
        title: 'auto',
        directions: ['Reverse'],
        github: 'Monoceros406',
        blog: 'https://monoceros406.github.io/',
      },
    ],
  },
  // #endregion

  // #region 2024 届
  {
    cohort: '2024',
    desc: '2024 年加入',
    entries: [
      {
        nickname: 'YukiDA',
        sitenick: 'Reverse',
        title: 'YukiDA',
        directions: ['Reverse'],
        github: 'HanafudaStore',
        blog: 'https://hanafudastore.github.io/',
      },
      {
        nickname: 'Yogurt',
        sitenick: 'Web, Misc',
        title: 'Yogurt',
        directions: ['Web', 'Misc'],
        github: 'Y09urt',
        blog: 'http://yogurts.top/',
      },
      {
        nickname: 'Shone',
        sitenick: 'Web',
        title: 'Shone',
        directions: ['Web'],
        github: 'SSSSShone',
        blog: 'https://www.shone.fun/',
      },
      {
        nickname: '起名太难算了吧',
        sitenick: 'Web',
        title: '起名太难算了吧',
        directions: ['Web'],
        github: 'aye-hoyosei',
        blog: 'https://aye-hoyosei.github.io/',
      },
      {
        nickname: 'Perplexity',
        sitenick: 'Crypto',
        title: 'Perplexity',
        directions: ['Crypto'],
        qq: '334285969',
        github: 'P3rp13xity',
        blog: '',
      },
      {
        nickname: 'Starfish',
        sitenick: 'Reverse',
        title: 'Starfish',
        directions: ['Reverse'],
        github: 'Starfish1117',
        blog: 'https://starfish1117.github.io/',
      },
      {
        nickname: 'LNexaminee',
        sitenick: 'Pwn',
        title: 'LNexaminee',
        directions: ['Pwn'],
        github: 'bmx6132',
        blog: 'https://bmx6132.github.io/',
      },
    ],
  },
  // #endregion

  // #region 2025 届
  {
    cohort: '2025',
    desc: '2025 年加入',
    entries: [
      {
        nickname: '康可',
        sitenick: 'Web',
        title: '康可ing',
        directions: ['Web 安全'],
        qq: '3497863696',
        github: 'yanxisishi',
        blog: 'https://blog.yanxisishi.top/',
      },
      {
        nickname: 'Tooki',
        sitenick: 'Reverse, Misc',
        title: 'Tookinparty',
        directions: ['二进制安全'],
        qq: '3323198776',
        github: 'Tookiiiii',
        blog: ' https://tooki-blog.vercel.app',
      },
      {
        nickname: 'uky',
        sitenick: 'Web',
        title: 'uky',
        directions: ['Web 安全'],
        qq: '3036074562',
        github: 'UK5555544',
        blog: ' https://uky.show/',
      },
      {
        nickname: '爱吃豆包',
        sitenick: 'Pwn',
        title: 'f0risty',
        directions: ['pwn'],
        qq: '3405626113',
        github: 'lmx-071028',
        blog: 'https://echofeild.com/',
      },
      {
        nickname: '不开心就喝酱油',
        sitenick: 'Reserve',
        title: '酱油ing',
        directions: ['逆向工程'],
        qq: '303137046',
        github: 'pank1ng',
        blog: 'https://blog.jiangyou.dpdns.org',
      },
      {
        nickname: 'yugjhfgtf',
        sitenick: 'Crypto',
        title: 'yugjhfgtf',
        directions: ['Crypto 安全'],
        qq: '',
        github: 'yugjhfgtf',
        blog: '',
      },
    ],
  },
  // #endregion
];

export default memberGroups;
