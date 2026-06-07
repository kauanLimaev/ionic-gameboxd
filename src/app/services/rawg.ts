import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Rawg {
  constructor(private http: HttpClient) {}

  getGames(page: number) {
    return this.http.get(
      `https://api.rawg.io/api/games?key=${environment.rawgApiKey}&page=${page}`,
    );
  }
}
