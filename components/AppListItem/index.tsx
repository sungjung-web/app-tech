import { AppTechItem, APP_TECH_TYPE_LABEL_COLOR } from '@/constant/appTech';
import TailwindImage from '../Image';

interface Props {
  app: AppTechItem;
}

export default function AppListItem({ app }: Props) {
  return (
    <div className="p-6 min-w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div
        className="shrink-0 h-12 w-12 rounded-xl overflow-hidden"
        style={{ boxShadow: `0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)` }}
      >
        <TailwindImage src={app.image} alt={app.title} />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="text-xl font-medium text-black">{app.title}</div>

        <div className="flex flex-wrap gap-2">
          {app.types.map(type => (
            <span
              key={type}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${APP_TECH_TYPE_LABEL_COLOR[type]} text-green-800`}
            >
              {type}
            </span>
          ))}
        </div>

        {app.searchLink && (
          <a href={app.searchLink.link} target="_blank" rel="noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition duration-200 hover:-translate-y-0.5">
              {app.searchLink.title}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
