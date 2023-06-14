import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/players.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  /*addPlayerForm!: FormGroup;
  player: any = {};
  id: any;
  title:string="ADD PLAYER"



  constructor(private _router: Router , private activatedroute:ActivatedRoute) {}
  ngOnInit() {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
console.log('herre id',this.id)
if(this.id){
  this.title='EDIT Player'
}
this.getplayerById()
  }
  addEditPlayer() {
    if (this.id) {
      let playeres = JSON.parse(localStorage.getItem('playeres') || '[]');
      for (let i = 0; i < playeres.length; i++) {
        if (playeres[i].id === Number(this.id)) playeres[i] = this.player;
      }
    } else {
    }
    let T = JSON.parse(localStorage.getItem('playeres') || '[]');
    let playerId = JSON.parse(localStorage.getItem('playerId') || '0');
    this.player.id = playerId;

    T.push(this.player);

    localStorage.setItem('playeres', JSON.stringify(T));
    localStorage.setItem('playerId', JSON.stringify(playerId + 1));
    this._router.navigate(['tabplayer']);
  }
  getplayerById(){
    let playeres = JSON.parse(localStorage.getItem('playeres')||'[]')
    for (let  i = 0;  i < playeres.length;  i++) {
      if( playeres[i].id ===  Number(this.id) )
this.player=playeres[i] }
  }
}
*/
addplayerForm!: FormGroup;
player: any = {};
id: any;
title: string = 'ADD player';
constructor(
  private _router: Router,
  private playerService: PlayerService,
  private activatedroute: ActivatedRoute
) {}

ngOnInit() {
  this.id = this.activatedroute.snapshot.paramMap.get('id');
  console.log('herre id', this.id);
  if (this.id) {
    this.title = 'EDIT player';
  }
  this.getplayerById();
}
addEditplayer() {
  if (this.id) {
    /*let playeres = JSON.parse(localStorage.getItem('playeres') || '[]');
    for (let i = 0; i < playeres.length; i++) {
      if (playeres[i].id === Number(this.id)) playeres[i] = this.player;*/
    this.playerService.updatePlayer(this.player).subscribe((res) => {
      console.log('reult', res);
      this._router.navigate(['tableau']);
    });
  } else {
    /* let T = JSON.parse(localStorage.getItem('playeres') || '[]');
  let playerId = JSON.parse(localStorage.getItem('playerId') || '0');
  this.player.id = playerId;

  T.push(this.player);

 localStorage.setItem('playeres', JSON.stringify(T));
  localStorage.setItem('playerId', JSON.stringify(playerId + 1));
  this._router.navigate(['tabplayer']);
  */ let playerId = JSON.parse(localStorage.getItem('playerId') || '0');
    this.player.id = playerId;
    this.playerService.addPlayer(this.player).subscribe(() => {
      console.log('**************');
      this._router.navigate(['tableau']);
    });
    this.playerService.addPlayer;
    localStorage.setItem('playerId', JSON.stringify(playerId + 1));
  }
}
getplayerById() {
  // let playeres = JSON.parse(localStorage.getItem('playeres') || '[]');
  //for (let i = 0; i < playeres.length; i++) {
  //if (playeres[i].id === Number(this.id)) this.player = playeres[i];
  //}
  this.playerService.getPlayerById(this.id).subscribe((res) => {
    console.log('getId', res);
    this.player = res;
  });
}
}
