import { Component, OnInit } from '@angular/core';
import { EventItem } from 'src/app/core/models/EventItem';
import { EventsService } from 'src/app/core/services/events-service';
import { IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [CommonModule, IonIcon],
})
export class EventsComponent  implements OnInit {

  
  events: EventItem[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getLatestEvents().subscribe(res => {
      this.events = res;
    });
  }

  badgeClass(status: string) {
    return {
      'registered': status === 'registered',
      'unregistered': status === 'unregistered',
      'canceled': status === 'canceled'
    };
  }

}
