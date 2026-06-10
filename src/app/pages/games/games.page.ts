import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
<<<<<<< HEAD
=======
  IonCardContent,
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonText,
<<<<<<< HEAD
  IonBackButton,
  IonButtons,
=======
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
} from '@ionic/angular/standalone';
import { Rawg } from '../../services/rawg';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d

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
<<<<<<< HEAD
=======
    IonCardContent,
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonText,
<<<<<<< HEAD
    IonBackButton,
    IonButtons,
=======
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
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
<<<<<<< HEAD
    private router: Router,
=======
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  ) {}

  ngOnInit() {
    this.loadGames();
  }
  loadGames() {
<<<<<<< HEAD
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
=======
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
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  }

  loadMore(event: any) {
    this.page++;

<<<<<<< HEAD
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
=======
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
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message,
      buttons: [
<<<<<<< HEAD
        { text: 'Fechar', role: 'cancel' },
=======
        { text: 'OK', role: 'cancel' },
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
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
<<<<<<< HEAD
    this.router.navigate([`/game/${gameId}`]);
=======
    window.location.href = `/game/${gameId}`;
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  }
}
