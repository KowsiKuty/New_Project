import { NgModule } from '@angular/core';
import { BrowserModule,HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignroutingModule } from './design/designrouting.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GestureComponent } from './design/gesture/gesture.component';
import { HomeComponent } from './design/home/home.component';
import { ProfileDetailsComponent } from './design/profile-details/profile-details.component';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import {Carousel} from 'bootstrap'




@NgModule({
  declarations: [
    AppComponent,
    GestureComponent,
    HomeComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignroutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HammerModule,
    // SwiperModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
