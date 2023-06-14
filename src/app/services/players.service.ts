import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  PlayerUrl = 'http://localhost:3000/Players';
  constructor(private bostagi: HttpClient) {}
  addPlayer(Player: any) {
    //console.log('here addPlayer servuce', Player);

    return this.bostagi.post<{ data: any }>(this.PlayerUrl, Player);
  }
  getAllPlayer() {
    return this.bostagi.get<{ data: any }>(this.PlayerUrl);
  }
  getPlayerById(id: any) {
    // console.log('here id Player***** ', id);

    return this.bostagi.get<{ data: any }>(`${this.PlayerUrl}/${id}`);
  }
  updatePlayer(Player: any) {
    return this.bostagi.put<{ data: any }>(
      `${this.PlayerUrl}/${Player.id}`,
      Player
    );
  }
  deletePlayer(id: any) {
    return this.bostagi.delete<{ data: any }>(`${this.PlayerUrl}/${id}`);
  }
}
