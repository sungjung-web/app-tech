import { format } from 'date-fns';

export enum APP_TECH_TYPE {
  클릭 = '클릭',
  미션 = '미션',
  출석체크 = '출석체크',
  만보기 = '만보기',
  퀴즈 = '퀴즈',
  설문조사 = '설문조사',
  상시노출 = '상시노출',
  영수증 = '영수증',
}

export type AppTechItem = {
  id: string;
  title: string;
  image: string;
  types: APP_TECH_TYPE[];
  searchLink?: { title: string; link: string };
};

const today = format(new Date(), 'M월 dd일');

export const APP_TECH_LIST = [
  {
    id: 'toss',
    title: '토스',
    image: '/app_icon/toss.webp',
    types: [
      APP_TECH_TYPE.클릭,
      APP_TECH_TYPE.미션,
      APP_TECH_TYPE.출석체크,
      APP_TECH_TYPE.만보기,
      APP_TECH_TYPE.퀴즈,
      APP_TECH_TYPE.설문조사,
    ],
    searchLink: {
      title: '행운퀴즈 정답보기',
      link: `https://search.naver.com/search.naver?where=view&sm=tab_jum&query=${today}+토스+행운퀴즈`,
    },
  },
  {
    id: 'ok_cashback',
    title: 'OK 캐쉬백',
    image: '/app_icon/ok_cashback.webp',
    types: [APP_TECH_TYPE.클릭, APP_TECH_TYPE.미션, APP_TECH_TYPE.만보기, APP_TECH_TYPE.퀴즈],
    searchLink: {
      title: '오퀴즈 정답보기',
      link: `https://search.naver.com/search.naver?where=view&sm=tab_jum&query=${today}+ok캐쉬백+오퀴즈`,
    },
  },
  {
    id: 'cash_walk',
    title: '캐시워크',
    image: '/app_icon/cash_walk.webp',
    types: [APP_TECH_TYPE.만보기],
  },
  {
    id: 'monimo',
    title: '모니모',
    image: '/app_icon/monimo.webp',
    types: [APP_TECH_TYPE.만보기, APP_TECH_TYPE.미션, APP_TECH_TYPE.출석체크],
  },
  {
    id: 'cherry_point',
    title: '체리포인트',
    image: '/app_icon/cherry_point.webp',
    types: [APP_TECH_TYPE.설문조사, APP_TECH_TYPE.미션, APP_TECH_TYPE.출석체크],
  },
  {
    id: 'cash_slide',
    title: '캐시슬라이드',
    image: '/app_icon/cash_slide.png',
    types: [APP_TECH_TYPE.만보기, APP_TECH_TYPE.상시노출],
  },
  {
    id: 'naver',
    title: '네이버',
    image: '/app_icon/naver.webp',
    types: [APP_TECH_TYPE.영수증, APP_TECH_TYPE.클릭],
  },
  {
    id: 'm_brain',
    title: '엠브레인 패널파워',
    image: '/app_icon/m_brain.webp',
    types: [APP_TECH_TYPE.설문조사, APP_TECH_TYPE.영수증],
  },
];

export const APP_TECH_TYPE_LABEL_COLOR: Record<APP_TECH_TYPE, string> = {
  [APP_TECH_TYPE.클릭]: 'bg-green-100',
  [APP_TECH_TYPE.미션]: 'bg-blue-100',
  [APP_TECH_TYPE.출석체크]: 'bg-yellow-100',
  [APP_TECH_TYPE.만보기]: 'bg-purple-100',
  [APP_TECH_TYPE.퀴즈]: 'bg-red-100',
  [APP_TECH_TYPE.설문조사]: 'bg-indigo-100',
  [APP_TECH_TYPE.상시노출]: 'bg-pink-100',
  [APP_TECH_TYPE.영수증]: 'bg-gray-100',
};
