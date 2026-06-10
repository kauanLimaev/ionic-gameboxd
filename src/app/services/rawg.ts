import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Rawg {
  constructor(private http: HttpClient) {}

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
  }
}
