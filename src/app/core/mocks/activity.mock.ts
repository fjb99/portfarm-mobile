import { ActivityData } from "../models/ActivityData";

export const ACTIVITY_MOCK = {
 clicks: <ActivityData[]>[
    { date: 'Dec 24', value: 30000 },
    { date: 'Dec 25', value: 28000 },
    { date: 'Dec 26', value: 35000 },
    { date: 'Dec 27', value: 42000 },
    { date: 'Dec 28', value: 38000 },
  ],

  sales: <ActivityData[]>[
    { date: 'Dec 24', value: 12000 },
    { date: 'Dec 25', value: 16000 },
    { date: 'Dec 26', value: 19000 },
    { date: 'Dec 27', value: 22000 },
    { date: 'Dec 28', value: 18000 },
  ],

  views: <ActivityData[]>[
    { date: 'Dec 24', value: 50000 },
    { date: 'Dec 25', value: 47000 },
    { date: 'Dec 26', value: 52000 },
    { date: 'Dec 27', value: 58000 },
    { date: 'Dec 28', value: 54000 },
  ]
};