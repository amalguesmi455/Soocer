import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddmatchComponent } from './component/add-match/add-match.component';
import { TabMatchesComponent } from './component/tab-matches/tab-matches.component';
import { BlogComponent } from './component/blog/blog.component';
import { BannerComponent } from './component/banner/banner.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeroComponent } from './component/hero/hero.component';
import { NextMatchComponent } from './component/next-match/next-match.component';
import { NewsComponent } from './component/news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './component/cards/cards.component';
import { MatchComponent } from './component/match/match.component';
import { TableauComponent } from './component/tableau/tableau.component';
import { ColorDirective } from './directives/color.directive.spec';
import { ReversePipe } from './directives/reverse.pipe';
import { FilterPipe } from './directives/filtre.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { TeamComponent } from './component/team/team.component';
import { TableteamComponent } from './component/tableteam/tableteam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddPlayerComponent,
    AddmatchComponent,
    TabMatchesComponent,
    BlogComponent,
    BannerComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    HeroComponent,
    NextMatchComponent,
    NewsComponent,
    CardsComponent,
    MatchComponent,
    TableauComponent,
    ColorDirective,
    ReversePipe,
    FilterPipe,
    UserComponent,

    TeamComponent,
    TableteamComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
