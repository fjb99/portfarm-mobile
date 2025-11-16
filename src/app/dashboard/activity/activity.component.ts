import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard-service';
import { IonCard, IonSelect, IonIcon, IonSelectOption } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityData } from 'src/app/core/models/ActivityData';

Chart.register(...registerables);

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  imports: [CommonModule, FormsModule, IonSelect, IonSelectOption, IonIcon],
})
export class ActivityComponent  {

  
  @ViewChild('activityCanvas') activityCanvas!: ElementRef<HTMLCanvasElement>;

  selectedType: "clicks" | "sales" | "views" = "clicks";
  chart!: Chart;

  constructor(private service: DashboardService) {}

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    this.service.getActivity(this.selectedType).subscribe(data => {
      this.buildChart(data);
    });
  }

  onTypeChange() {
    this.loadChart();
  }

  buildChart(data: ActivityData[]) {
    const ctx = this.activityCanvas.nativeElement.getContext("2d")!;

    if (this.chart) this.chart.destroy();

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: data.map(d => d.date),
        datasets: [
          {
            data: data.map(d => d.value),
            borderColor: "#f4a300",
            borderWidth: 3,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#f4a300"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: {
            ticks: { callback: (v: any) => Number(v) / 1000 + "K" }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }
}
