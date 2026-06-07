import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { Rawg } from '../services/rawg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class GamesPage implements OnInit {
  games: any[] = [];
  page = 1;

  constructor(private rawg: Rawg) {}

  ngOnInit() {
    this.loadGames();
  }
  loadGames() {
    this.rawg.getGames(this.page).subscribe((data: any) => {
      this.games = [...this.games, ...data.results];
      console.log(this.games);
      console.log(this.games.length);
    });
  }

  loadMore(event: any) {
    this.page++;

    this.rawg.getGames(this.page).subscribe((data: any) => {
      this.games = [...this.games, ...data.results];
      console.log(this.games);
      console.log(this.games.length);
      event.target.complete();
    });
  }
}
