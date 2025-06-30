export interface ICategorySelect {
  selected: string;
  onSelect: (category: string) => void;
}