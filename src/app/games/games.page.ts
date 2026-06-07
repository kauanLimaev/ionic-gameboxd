import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonText,
} from '@ionic/angular/standalone';
import { Rawg } from '../services/rawg';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';

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
    IonCardContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonText,
  ],
})
export class GamesPage implements OnInit {
  games: any[] = [];
  page = 1;
  loading = true;
  errorMessage = '';
  hasError = false;

  constructor(
    private rawg: Rawg,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.loadGames();
  }
  loadGames() {
    this.rawg.getGames(this.page).subscribe(
      (data: any) => {
        this.games = [...this.games, ...data.results];
        this.loading = false;
      },
      async (error) => {
        console.error(error);
        this.loading = false;
        this.hasError = true;
        await this.showErrorAlert(
          'Não foi possível carregar os jogos. Por favor, tente novamente mais tarde.',
        );
      },
    );
  }

  loadMore(event: any) {
    this.page++;

    this.rawg.getGames(this.page).subscribe(
      (data: any) => {
        this.games = [...this.games, ...data.results];
        event.target.complete();
      },
      async (error) => {
        console.error(error);
        this.hasError = true;
        await this.showErrorAlert(
          'Não foi possível carregar os jogos. Por favor, tente novamente mais tarde.',
        );
        event.target.complete();
      },
    );
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message,
      buttons: [
        { text: 'OK', role: 'cancel' },
        { text: 'Tentar novamente', handler: () => this.loadGames() },
      ],
    });
    await alert.present();
  }

  get skeletonArray() {
    const columns = Math.floor(window.innerWidth / 250);
    return Array(columns * 3);
  }
}
