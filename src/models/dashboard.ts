import { ComponentTypes } from 'mithril';

export type IconType = () => string | string;

export type IconResolver = () => string;

export interface IDashboard {
  id: Dashboards;
  default?: boolean;
  hasNavBar?: boolean;
  title: string | (() => string);
  icon: string | IconResolver;
  iconClass?: string;
  route: string;
  visible: boolean | (() => boolean);
  component: ComponentTypes<any, any>;
}

export enum Dashboards {
  HOME = 'HOME',
  TAXONOMY = 'TAXONOMY',
  TECHNOLOGIES = 'TECHNOLOGIES',
  TECHNOLOGY = 'TECHNOLOGY',
  ABOUT = 'ABOUT',
  SETTINGS = 'SETTINGS',
  OVERVIEW = 'OVERVIEW',
  COMPARE = 'COMPARE',
  HELP = 'HELP',
}
