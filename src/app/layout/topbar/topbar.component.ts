import { Component  } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { IonHeader, IonButtons, IonToolbar, IonIcon, IonMenuButton, IonAvatar, IonButton, IonTitle } from "@ionic/angular/standalone";
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonButtons, IonToolbar, IonIcon, IonMenuButton, IonAvatar, IonButton, IonTitle],
})
export class TopbarComponent {
  constructor(private modalCtrl: ModalController) { }
 

  async openMenu() {
    const modal = await this.modalCtrl.create({
      component: MenuModalComponent,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5,
      cssClass: 'menu-sheet'
    });

    await modal.present();
  }

}
