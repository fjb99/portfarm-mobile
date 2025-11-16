import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [TopbarComponent],
})
export class LayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
