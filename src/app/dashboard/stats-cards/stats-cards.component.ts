import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { DashboardStats } from 'src/app/core/models/DashboardStats';
import { DashboardService } from 'src/app/core/services/dashboard-service';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss'],
  imports: [CommonModule, IonIcon],
})
export class StatsCardsComponent  implements OnInit {

  stats: DashboardStats[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getStats().subscribe(data => {
      this.stats = data;
    });
  }

  getTrendIcon(dir: string) {
    return dir === 'up' ? 'arrow-up-outline' : 'arrow-down-outline';
  }

}
