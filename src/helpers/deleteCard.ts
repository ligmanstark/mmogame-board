import { results } from '@/types/types';

export const deleteCard = (
  id: string,
  value?: results[],
  deleteValue?: results[]
) => {
  if (value) {
    return value.filter((el: results) => el.id !== id);
  } else {
    return deleteValue?.filter((el: results) => el.id === id)[0];
  }
};
