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
    entries: [],
  },
  // #endregion

  // #region 2022 届
  {
    cohort: '2022',
    desc: '2022 年加入',
    entries: [],
  },
  // #endregion

  // #region 2023 届
  {
    cohort: '2023',
    desc: '2023 年加入',
    entries: [],
  },
  // #endregion

  // #region 2024 届
  {
    cohort: '2024',
    desc: '2024 年加入',
    entries: [
      {
        nickname: 'perplexity',
        sitenick: 'crypto',
        title: 'perplexity',
        directions: ['Crypto 安全'],
        qq: '334285969',
        github: '',
        blog: '',
      }
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
        sitenick: 'web',
        title: '康可ing',
        directions: ['Web 安全'],
        qq: '3497863696',
        github: 'yanxisishi',
        blog: 'https://blog.yanxisishi.top/',
      },
      {
        nickname: 'Tooki',
        sitenick: 'reverse,misc',
        title: 'Tookinparty',
        directions: ['二进制安全'],
        qq: '3323198776',
        github: 'Tookiiiii',
        blog: ' https://tooki-blog.vercel.app',
      },
      {
        nickname: 'uky',
        sitenick: 'web',
        title: 'uky',
        directions: ['Web 安全'],
        qq: '3036074562',
        github: 'UK5555544',
        blog: ' https://uky.show/',
      },
      {
        nickname: '爱吃豆包',
        sitenick: 'pwn',
        title: 'f0risty',
        directions: ['pwn'],
        qq: '3405626113',
        blog: 'https://echofeild.com/',
      },
      {
        nickname: '不开心就喝酱油',
        sitenick: 'reserve',
        title: '酱油ing',
        directions: ['逆向工程'],
        qq: '303137046',
        github: 'pank1ng',
        blog: 'https://blog.jiangyou.dpdns.org',
      },

    ],
  },
  // #endregion
];

export default memberGroups;
