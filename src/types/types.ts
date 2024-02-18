/* eslint-disable @typescript-eslint/no-explicit-any */
export type info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type location = {
  name: string;
  url: string;
};

export type results = {
  [x: string]: any;
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: location;
  image: string;
  origin: {
    name: string;
  };
};

export type ricksUniverse = {
  info: info;
  results: results[];
};
