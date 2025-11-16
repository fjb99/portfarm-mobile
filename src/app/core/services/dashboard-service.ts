import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats } from '../models/DashboardStats';
import { DASHBOARD_STATS_MOCK } from '../mocks/dashboard.mock';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {


  getStats(): Observable<DashboardStats[]> {
    return of(DASHBOARD_STATS_MOCK);
  }

  
}
