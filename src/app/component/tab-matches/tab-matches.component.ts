import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tab-matches',
  templateUrl: './tab-matches.component.html',
  styleUrls: ['./tab-matches.component.css'],
})
export class TabMatchesComponent implements OnInit {
  matches: any = [];
  MatchesService: any;

  constructor(
    private _Router: Router,
    private matchesService: MatchesService
  ) {}
  ngOnInit(): void {
    this.getAllMatches();
  }
  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.matchesService
      .getAllMatches()
      .subscribe((res: any) => (this.matches = res));
    console.log('herre get');
  }
  delete(id: any) {
    /*for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        this.matches.splice(i, 1);
      }

      localStorage.setItem('matches', JSON.stringify(this.matches));
    }
   */
    this.matchesService
      .deleteMatch(id)
      .subscribe((res) => console.log('delete'));
    this.getAllMatches();
    console.log('all  match', this.matches);
  }
  navigate(id: any) {
    this._Router.navigate(['add-match/' + id]);
  }
}
