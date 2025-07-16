import { createContext } from 'react';

type PaginationContextT = {
  page: number;
  pageLength: number;
  nextPage: () => void;
  prevPage: () => void;
}

const PaginationContext = createContext<PaginationContextT>({
  page: 1,
  pageLength: 1,
  nextPage: () => { },
  prevPage: () => { },
});

export default PaginationContext;