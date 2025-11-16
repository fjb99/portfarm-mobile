import { Injectable } from '@angular/core';
import { AgencySummary } from '../models/AgencySummery';
import { Observable, of } from 'rxjs';
import { AGENCY_SUMMARY_MOCK } from '../mocks/agency.mock';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  getSummary(): Observable<AgencySummary> {
    return of(AGENCY_SUMMARY_MOCK);
  }
}
