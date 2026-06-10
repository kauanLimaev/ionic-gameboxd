import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
<<<<<<< HEAD
  IonCardTitle,
  IonButtons,
=======
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
<<<<<<< HEAD
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterLink,
    IonCard,
    IonCardTitle,
    IonButtons,
  ],
=======
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    RouterLink,
    IonCard,
    IonCardContent, 
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonMenuButton,],
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
})
export class HomePage {
  constructor() {}
}
