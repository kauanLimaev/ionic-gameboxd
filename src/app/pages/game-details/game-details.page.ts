import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
<<<<<<< HEAD
  IonButtons,
  IonBackButton,
  IonButton,
  IonSkeletonText,
  IonChip,
} from '@ionic/angular/standalone';
import { Rawg } from '../../services/rawg';
import { ActivatedRoute, RouterLink } from '@angular/router';
=======
  IonText,
} from '@ionic/angular/standalone';
import { Rawg } from '../../services/rawg';
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d

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
<<<<<<< HEAD
    IonButtons,
    IonBackButton,
    IonButton,
    IonSkeletonText,
    IonChip,
    CommonModule,
    RouterLink,
=======
    CommonModule,
    FormsModule,
    IonText,
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  ],
})
export class GameDetailsPage implements OnInit {
  game: any;
<<<<<<< HEAD
  loading = true;
  errorMessage = '';
  private genreTranslations: Record<string, string> = {
    Action: 'Ação',
    Adventure: 'Aventura',
    Arcade: 'Arcade',
    'Board Games': 'Jogos de tabuleiro',
    Card: 'Cartas',
    Casual: 'Casual',
    Educational: 'Educativo',
    Family: 'Família',
    Fighting: 'Luta',
    Indie: 'Independente',
    'Massively Multiplayer': 'Multijogador em massa',
    MMO: 'MMO',
    Music: 'Música',
    Platformer: 'Plataforma',
    Puzzle: 'Quebra-cabeça',
    Racing: 'Corrida',
    RPG: 'RPG',
    Shooter: 'Tiro',
    Simulation: 'Simulação',
    Sports: 'Esportes',
    Strategy: 'Estratégia',
  };

  constructor(
    private rawg: Rawg,
    private route: ActivatedRoute,
  ) {}
=======
  constructor(private rawg: Rawg) {}
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d

  ngOnInit() {
    this.loadGameDetails();
  }

  loadGameDetails() {
<<<<<<< HEAD
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.rawg.getGameDetails(gameId).subscribe({
        next: (game) => {
          this.game = game;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
          this.errorMessage = 'Não foi possível carregar os detalhes deste jogo.';
        },
      });
  }

  listNames(items: any[] = []): string {
    return items.map((item) => item.name).join(', ') || 'Indisponível';
  }

  listPlatforms(platforms: any[] = []): string {
    return (
      platforms.map((item) => item.platform?.name).filter(Boolean).join(', ') ||
      'Indisponível'
    );
  }

  translateGenre(genre: string): string {
    return this.genreTranslations[genre] || genre;
  }

  getDescription(): string {
    return (
      this.game?.description ||
      this.game?.description_raw ||
      'Descrição indisponível.'
    );
=======
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
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  }
}
