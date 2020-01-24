import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { YearTwentytwentyComponent } from './years/year-twentytwenty/year-twentytwenty.component';
import { YearTwentynineteenComponent } from './years/year-twentynineteen/year-twentynineteen.component';
import { YearTwentyeighteenComponent } from './years/year-twentyeighteen/year-twentyeighteen.component';
import { YearTwentyseventeenComponent } from './years/year-twentyseventeen/year-twentyseventeen.component';
import { YearTwentysixteenComponent } from './years/year-twentysixteen/year-twentysixteen.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavMenuComponent,
    HomeComponent,
    ResumeComponent,
    FooterComponent,
    YearTwentytwentyComponent,
    YearTwentynineteenComponent,
    YearTwentyeighteenComponent,
    YearTwentyseventeenComponent,
    YearTwentysixteenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
