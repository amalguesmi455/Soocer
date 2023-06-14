import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddmatchComponent implements OnInit {
  addmatchForm!: FormGroup;
  match: any = {};
  id: any;
  title: string = 'ADD MATCH';
  constructor(
    private _router: Router,
    private matchService: MatchesService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log('herre id', this.id);
    if (this.id) {
      this.title = 'EDIT MATCH';
    }
    this.getMatchById();
  }
  addEditMatch() {
    if (this.id) {
      /*let matches = JSON.parse(localStorage.getItem('matches') || '[]');
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].id === Number(this.id)) matches[i] = this.match;*/
      this.matchService.updateMatch(this.match).subscribe((res) => {
        console.log('reult', res);
        this._router.navigate(['tabmatch']);
      });
    } else {
      /* let T = JSON.parse(localStorage.getItem('matches') || '[]');
    let matchId = JSON.parse(localStorage.getItem('matchId') || '0');
    this.match.id = matchId;

    T.push(this.match);

   localStorage.setItem('matches', JSON.stringify(T));
    localStorage.setItem('matchId', JSON.stringify(matchId + 1));
    this._router.navigate(['tabmatch']);
    */ let matchId = JSON.parse(localStorage.getItem('matchId') || '0');
      this.match.id = matchId;
      this.matchService.addMatch(this.match).subscribe(() => {
        console.log('**************');
        this._router.navigate(['tabmatch']);
      });
      this.matchService.addMatch;
      localStorage.setItem('matchId', JSON.stringify(matchId + 1));
    }
  }
  getMatchById() {
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    //for (let i = 0; i < matches.length; i++) {
    //if (matches[i].id === Number(this.id)) this.match = matches[i];
    //}
    this.matchService.getMatchById(this.id).subscribe((res) => {
      console.log('getId', res);
      this.match = res;
    });
  }
}
