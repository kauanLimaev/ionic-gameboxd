import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./pages/games/games.page').then((m) => m.GamesPage),
  },
  {
    path: 'game/:id',
    loadComponent: () =>
      import('./pages/game-details/game-details.page').then(
        (m) => m.GameDetailsPage,
      ),
  },
>>>>>>> 85e67809ce7193c50567442a9f61db5412a8a9c1
];
