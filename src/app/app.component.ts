import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { LayoutComponent } from "./layout/layout/layout.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, LayoutComponent],
  providers: [ModalController],
})
export class AppComponent {
   constructor() {}
}
