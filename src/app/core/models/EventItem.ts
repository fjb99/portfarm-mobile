export interface EventItem {
  title: string;
  date: string;
  status: 'registered' | 'unregistered' | 'canceled';
}