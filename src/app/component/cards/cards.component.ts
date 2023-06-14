import { Component, OnInit, EventEmitter } from '@angular/core';
import { FilterPipe } from 'src/app/directives/filtre.pipe';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  matches: any = [];
term: any;
  constructor() {}
  SortByPipe: FilterPipe | undefined
  ngOnInit(): void {
    this.getAllMatches();
  }

  getAllMatches() {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
  }
  deleteMatch(id: any) {
    console.log('herre delete match', id);
    for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        this.matches.splice(i, 1);
      }

      localStorage.setItem('matches', JSON.stringify(this.matches));
    }
  }

}

