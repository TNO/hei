import m, { FactoryComponent } from 'mithril';
import { meiosisSetup } from 'meiosis-setup';
import { routingSvc } from '.';
import { Dashboards, DataModel, defaultModel, ID, SearchFilter, Intervention } from '../models';
import { ldb } from '../utils/local-ldb';
import { MeiosisCell, Update } from 'meiosis-setup/types';

const MODEL_KEY = 'HPET_MODEL';
const CUR_USER_KEY = 'HPET_CUR_USER';
const BOOKMARKS_KEY = 'HPET_BOOKMARK';
const COMPARE_LIST_KEY = 'HPET_COMPARE_LIST_KEY';

export interface State {
  page: Dashboards;
  model: DataModel;
  curUser?: string;
  curIntervention?: Intervention;
  bookmarks: ID[];
  compareList: ID[];
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
  setIntervention: (curIntervention: Intervention) => void;
  bookmark: (id: ID) => void;
  compare: (id: ID) => void;
  setCompareList: (ids: ID[]) => void;
  setSearchFilters: (sf: Partial<SearchFilter>) => void;
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
    if (model.interventions)
      model.interventions.sort((a, b) =>
        (a.intervention || '').localeCompare(b.intervention || '')
      );
    ldb.set(MODEL_KEY, JSON.stringify(model));
    // console.log(JSON.stringify(model, null, 2));
    update({ model: () => model });
  },
  saveCurUser: (curUser: string) => {
    ldb.set(CUR_USER_KEY, curUser);
    update({ curUser });
  },
  setIntervention: (curIntervention: Intervention) =>
    update({ curIntervention: () => curIntervention }),
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
  compare: (id: ID) =>
    update({
      compareList: (compareList = []) => {
        const newCompareList = (() => {
          if (compareList.indexOf(id) >= 0) return compareList.filter((b) => b !== id);
          compareList.push(id);
          return compareList;
        })();
        ldb.set(COMPARE_LIST_KEY, JSON.stringify(newCompareList));
        return newCompareList;
      },
    }),
  setCompareList: (ids: ID[]) => {
    ldb.set(COMPARE_LIST_KEY, JSON.stringify(ids));
    update({ compareList: () => ids });
  },
  setSearchFilters: (searchFilters: Partial<SearchFilter>) => {
    // console.log(JSON.stringify(searchFilters, null, 2));
    update({ searchFilters });
  },
});

const initialize = async (update: Update<State>) => {
  const ds = await ldb.get(MODEL_KEY);
  const model = ds ? JSON.parse(ds) : defaultModel;
  const b = await ldb.get(BOOKMARKS_KEY);
  const bookmarks = b ? JSON.parse(b) : [];
  const c = await ldb.get(COMPARE_LIST_KEY);
  const compareList = c ? JSON.parse(c) : [];
  const curUser = (await ldb.get(CUR_USER_KEY)) || '';
  update({
    model: () => model,
    bookmarks: () => bookmarks,
    compareList: () => compareList,
    curUser,
  });
};

const app = {
  initial: {
    page: Dashboards.HOME,
    model: defaultModel,
    curIntervention: undefined,
    bookmarks: [],
    compareList: [],
    curUser: 'mod',
    searchFilters: {} as SearchFilter,
  } as State,
};
export const cells = meiosisSetup<State>({ app });
initialize(cells().update);

cells.map(() => {
  m.redraw();
});
