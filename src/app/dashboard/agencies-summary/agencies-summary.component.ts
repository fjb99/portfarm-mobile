import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgencySummary } from 'src/app/core/models/AgencySummery';
import { AgencyService } from 'src/app/core/services/agency-service';
import { IonCardHeader, IonCard, IonLabel, IonItem, IonIcon, IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { Observable } from 'rxjs';
// Chart.js modules
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from 'chart.js';

// Register modules
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
@Component({
  selector: 'app-agencies-summary',
  templateUrl: './agencies-summary.component.html',
  styleUrls: ['./agencies-summary.component.scss'],
  imports: [IonCardHeader, IonCard, IonLabel, IonItem, IonIcon, IonCardContent, IonGrid, IonRow, IonCol],
})
export class AgenciesSummaryComponent {
 summary$: Observable<AgencySummary> = this.service.getSummary();
  summary?: AgencySummary;

  @ViewChild('lineCanvas', { static: false })
  lineCanvas!: ElementRef<HTMLCanvasElement>;

  chart?: Chart;

  constructor(private service: AgencyService) {}

  ngAfterViewInit() {
    this.summary$.subscribe(summary => {
      this.summary = summary;
      setTimeout(() => this.renderChart(), 50);
    });
  }

  renderChart() {
    const canvas = this.lineCanvas?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''], // Invisible labels
        datasets: [
          {
            data: [10, 14, 12, 18, 15, 26, 24], // Smooth mock data
            borderColor: '#0a8f60',
            borderWidth: 4,
            tension: 0.45,         // Smooth line (very important)
            pointRadius: 0,        // No visible points
            fill: false
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        elements: {
          line: {
            borderJoinStyle: 'round',
            capBezierPoints: true
          }
        }
      }
    });
  }
}
