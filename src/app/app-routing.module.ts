import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AddmatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { LoginComponent } from './component/login/login.component';
import { TabMatchesComponent } from './component/tab-matches/tab-matches.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CardsComponent } from './component/cards/cards.component';
import { TableauComponent } from './component/tableau/tableau.component';



const routes: Routes = [
  {path:"",component :HomeComponent},
  {path:"contact",component :ContactComponent},
  {path:"add-match",component :AddmatchComponent},
  {path:"add-match/:id",component :AddmatchComponent},
  {path:"cards",component :CardsComponent},

  {path:"add-player",component :AddPlayerComponent},
  {path:"SignUp",component :SignUpComponent},

  {path:"login",component :LoginComponent},
  {path:"tabmatch",component :TabMatchesComponent},
  {path:"tableau",component :TableauComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
