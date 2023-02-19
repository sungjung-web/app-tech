import AppListItem from '@/components/AppListItem';
import { APP_TECH_LIST } from '@/constant/appTech';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="divide-y divide-slate-100 flex flex-col w-full">
        <h1 className="text-2xl mb-10 text-center">2023년 2월 앱테크 추천순위</h1>
        <ul className="flex flex-col gap-4 pt-2 w-full">
          {APP_TECH_LIST.map(app => (
            <AppListItem key={app.id} app={app} />
          ))}
        </ul>
      </div>
    </main>
  );
}
