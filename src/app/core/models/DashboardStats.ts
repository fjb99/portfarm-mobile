export interface DashboardStats {
  label: string;
  value: string;
  subLabel: string;
  changePercent: string;
  direction: 'up' | 'down';
}