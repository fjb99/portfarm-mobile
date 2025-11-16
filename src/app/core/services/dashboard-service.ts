import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats } from '../models/DashboardStats';
import { DASHBOARD_STATS_MOCK } from '../mocks/dashboard.mock';
import { ActivityData } from '../models/ActivityData';
import { ACTIVITY_MOCK } from '../mocks/activity.mock';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {


  getStats(): Observable<DashboardStats[]> {
    return of(DASHBOARD_STATS_MOCK);
  }

 getActivity(type: keyof typeof ACTIVITY_MOCK): Observable<ActivityData[]> {
    return of(ACTIVITY_MOCK[type]);
  }
  
}
