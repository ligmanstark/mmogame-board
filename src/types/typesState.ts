import * as T from './types';

export type ricksState = {
  ricksState: T.ricksUniverse[];
};

export type characters = {
  allChar: T.results[];
  deleteChar: T.results[];
  favoriteChar: T.results[];
  selectChar: T.results[];
  filter: boolean;
  page: number;
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
