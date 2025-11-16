import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/angular/standalone';
import { StatsCardsComponent } from '../stats-cards/stats-cards.component';
import { EventsComponent } from '../events/events.component';
import { AgenciesSummaryComponent } from '../agencies-summary/agencies-summary.component';
import { ActivityComponent } from "../activity/activity.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    StatsCardsComponent,
    EventsComponent,
    IonIcon,
    AgenciesSummaryComponent,
    ActivityComponent
],
})
export class DashboardPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
