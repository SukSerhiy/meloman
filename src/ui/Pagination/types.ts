export interface IPagination {
  page: number;
  perPage: number;
  total: number;
  onPageChange: (page: number) => void;
  maxToShow?: number;
}