import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/players.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent implements OnInit {
  /*
    playeres: any = [];

    constructor(private _Router: Router) {}
    ngOnInit(): void {
      this.getAllplayeres();
    }
    getAllplayeres() {
      this.playeres = JSON.parse(localStorage.getItem('playeres') || '[]');
    }
    delete(id: any) {
      for (let i = 0; i < this.playeres.length; i++) {
        if (id === this.playeres[i].id) {
          this.playeres.splice(i, 1);
        }

        localStorage.setItem('playeres', JSON.stringify(this.playeres));
      }
      console.log('all  players', this.playeres);
    }
    navigate(id: any) {
      this._Router.navigate(['add-player/' + id]);
    }
  }*/

  Playeres: any = [];
  PlayerService: any;

  constructor(private _Router: Router, private playerService: PlayerService) {}
  ngOnInit(): void {
    this.getAllPlayeres();
  }
  getAllPlayeres() {
    // this.Playeres = JSON.parse(localStorage.getItem('Playeres') || '[]');
    this.playerService.getAllPlayer()
      .subscribe((res: any) => (this.Playeres = res));
    console.log('herre get');
  }
  delete(id: any) {
    /*for (let i = 0; i < this.Playeres.length; i++) {
      if (id === this.Playeres[i].id) {
        this.Playeres.splice(i, 1);
      }

      localStorage.setItem('Playeres', JSON.stringify(this.Playeres));
    }
   */
    this.playerService.deletePlayer(id).subscribe(() =>
      console.log('delete')
    );
    this.getAllPlayeres();
    console.log('all  Player', this.Playeres);
  }
  navigate(id: any) {
    this._Router.navigate(['add-player/' + id]);
  }
}
