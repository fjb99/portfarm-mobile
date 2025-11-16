import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventItem } from '../models/EventItem';
import { LATEST_EVENTS_MOCK } from '../mocks/events.mock';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  getLatestEvents(): Observable<EventItem[]> {
    return of(LATEST_EVENTS_MOCK);
  }
}
