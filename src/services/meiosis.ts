import m, { FactoryComponent } from 'mithril';
import setup, { MeiosisCell, Update } from 'meiosis-setup/mergerino';
import { routingSvc } from '.';
import { Dashboards, DataModel, defaultModel, ID, SearchFilter, Technology } from '../models';
import { ldb } from '../utils/local-ldb';

const MODEL_KEY = 'HPET_MODEL';
const CUR_USER_KEY = 'HPET_CUR_USER';
const BOOKMARKS_KEY = 'HPET_BOOKMARK';

export interface State {
  page: Dashboards;
  model: DataModel;
  curUser?: string;
  curTech?: Technology;
  bookmarks: ID[];
  searchFilters: SearchFilter;
}

export interface Actions {
  setPage: (page: Dashboards) => void;
  changePage: (
    page: Dashboards,
    params?: Record<string, string | number | undefined>,
    query?: Record<string, string | number | undefined>
  ) => void;
  saveModel: (ds: DataModel) => void;
  saveCurUser: (ds: string) => void;
  setTechnology: (curTech: Technology) => void;
  bookmark: (id: string) => void;
  setSearchFilters: (sf: SearchFilter) => void;
}

export type MeiosisComponent<T extends { [key: string]: any } = {}> = FactoryComponent<{
  state: State;
  actions: Actions;
  options?: T;
}>;

export const appActions: (cell: MeiosisCell<State>) => Actions = ({ update }) => ({
  // addDucks: (cell, amount) => {
  //   cell.update({ ducks: (value) => value + amount });
  // },
  setPage: (page) => update({ page }),
  changePage: (page, params, query) => {
    routingSvc && routingSvc.switchTo(page, params, query);
    update({ page });
  },
  saveModel: (model) => {
    model.lastUpdate = Date.now();
    model.version = model.version ? ++model.version : 1;
    if (model.technologies)
      model.technologies.sort((a, b) => (a.technology || '').localeCompare(b.technology || ''));
    ldb.set(MODEL_KEY, JSON.stringify(model));
    // console.log(JSON.stringify(model, null, 2));
    update({ model: () => model });
  },
  saveCurUser: (curUser: string) => {
    ldb.set(CUR_USER_KEY, curUser);
    update({ curUser });
  },
  setTechnology: (curTech: Technology) => update({ curTech: () => curTech }),
  bookmark: (id: ID) =>
    update({
      bookmarks: (bookmarks = []) => {
        const newBookmarks = (() => {
          if (bookmarks.indexOf(id) >= 0) return bookmarks.filter((b) => b !== id);
          bookmarks.push(id);
          return bookmarks;
        })();
        ldb.set(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
        return newBookmarks;
      },
    }),
  setSearchFilters: (searchFilters: SearchFilter) => update({ searchFilters }),
});

const initialize = async (update: Update<State>) => {
  const ds = await ldb.get(MODEL_KEY);
  const model = ds ? JSON.parse(ds) : defaultModel;
  const b = await ldb.get(BOOKMARKS_KEY);
  const bookmarks = b ? JSON.parse(b) : [];
  const curUser = (await ldb.get(CUR_USER_KEY)) || '';
  update({ model: () => model, bookmarks: () => bookmarks, curUser });
};

const app = {
  initial: {
    page: Dashboards.HOME,
    model: defaultModel,
    curTech: undefined,
    bookmarks: [],
    curUser: 'mod',
    searchFilters: {} as SearchFilter,
  } as State,
};
export const cells = setup<State>({ app });
initialize(cells().update);

cells.map(() => {
  m.redraw();
});
