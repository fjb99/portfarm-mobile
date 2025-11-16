import { Component } from '@angular/core';
import { IonContent, IonItem, IonList } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
  imports: [IonContent, IonItem, IonList],
})
export class MenuModalComponent {

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }

}
