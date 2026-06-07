import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
} from '@ionic/angular/standalone';
import { Rawg } from '../../services/rawg';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonText,
  ],
})
export class GameDetailsPage implements OnInit {
  game: any;
  constructor(private rawg: Rawg) {}

  ngOnInit() {
    this.loadGameDetails();
  }

  loadGameDetails() {
    const gameId = this.getGameIdFromUrl();
    this.rawg.getGameDetails(gameId).subscribe(
      (game) => {
        console.log('Game details:', game);
        this.game = game;
      },
      (error) => {
        // Handle error
      },
    );
  }

  getGameIdFromUrl(): number {
    const url = window.location.pathname;
    const parts = url.split('/');
    return parseInt(parts[parts.length - 1], 10);
  }
}
