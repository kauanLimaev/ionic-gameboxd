import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonText,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { Rawg } from '../../services/rawg';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    IonSkeletonText,
    IonText,
    IonBackButton,
    IonButtons,
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
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadGames();
  }
  loadGames() {
    this.rawg.getGames(this.page).subscribe({
      next: (data: any) => {
        this.games = [...this.games, ...data.results];
        this.loading = false;
        this.hasError = false;
        this.errorMessage = '';
      },
      error: async (error) => {
        console.error(error);
        this.loading = false;
        this.hasError = true;
        this.errorMessage =
          'Não foi possível carregar os jogos. Tente novamente mais tarde.';
        await this.showErrorAlert(
          'Não foi possível carregar os jogos. Tente novamente mais tarde.',
        );
      },
    });
  }

  loadMore(event: any) {
    this.page++;

    this.rawg.getGames(this.page).subscribe({
      next: (data: any) => {
        this.games = [...this.games, ...data.results];
        this.hasError = false;
        this.errorMessage = '';
        event.target.complete();
      },
      error: async (error) => {
        console.error(error);
        this.hasError = true;
        this.errorMessage =
          'Não foi possível carregar mais jogos. Tente novamente mais tarde.';
        await this.showErrorAlert(
          'Não foi possível carregar os jogos. Tente novamente mais tarde.',
        );
        event.target.complete();
      },
    });
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message,
      buttons: [
        { text: 'Fechar', role: 'cancel' },
        { text: 'Tentar novamente', handler: () => this.loadGames() },
      ],
    });
    await alert.present();
  }

  get skeletonArray() {
    const columns = Math.floor(window.innerWidth / 250);
    return Array(columns * 3);
  }

  openGameDetails(gameId: number) {
    this.router.navigate([`/game/${gameId}`]);
  }
}
