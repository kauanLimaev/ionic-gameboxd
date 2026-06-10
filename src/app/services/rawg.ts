import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Rawg {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  private readonly apiKey = environment.rawgApiKey?.trim();

  getGames(page: number) {
    return this.http.get(this.rawgUrl('games', { page }));
  }

  getGameDetails(gameId: number) {
    return this.http.get(this.rawgUrl(`games/${gameId}`));
  }

  private rawgUrl(path: string, params: Record<string, string | number> = {}) {
    const searchParams = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)]),
    );

    if (this.apiKey) {
      searchParams.set('key', this.apiKey);
      return `https://api.rawg.io/api/${path}?${searchParams.toString()}`;
    }

    searchParams.set('path', path);
    return `/api/rawg?${searchParams.toString()}`;
=======
  getGames(page: number) {
    return this.http.get(
      `https://api.rawg.io/api/games?key=${environment.rawgApiKey}&page=${page}`,
    );
  }

  getGameDetails(gameId: number) {
    return this.http.get(
      `https://api.rawg.io/api/games/${gameId}?key=${environment.rawgApiKey}`,
    );
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
  }
}
