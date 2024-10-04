import { Router } from '@angular/router';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';


export interface Profile {
  id: number;
  photo: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss'] // Fixing the styleUrl to styleUrls
})
export class GestureComponent implements OnInit, AfterViewInit {
  profiles: Profile[] = []; // Define profiles as an array of Profile
  gesture: boolean = true;
  homepage: boolean = false;
  visibleProfiles: any;
  storedProfiles: string | null = null; // Define the type as string | null
  swiper: Swiper | undefined; // Declare swiper variable

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.storedProfiles = localStorage.getItem('profiles');
    if (this.storedProfiles) {
      this.profiles = JSON.parse(this.storedProfiles);
      this.visibleProfiles = this.profiles.slice(0, 4);
    }
    console.log(this.profiles);
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: false,
      pagination: false,
      on: {
        slideNextTransitionStart: () => this.onSwipeRight(),
        slidePrevTransitionStart: () => this.onSwipeLeft()
      }
    });
  }

  onSwipeRight() {
    let swappingdata
    console.log("Swiped Right");
    if (this.visibleProfiles.length > 0) {
      swappingdata=this.profiles
      if (this.profiles.length > this.visibleProfiles.length) {
        this.visibleProfiles=swappingdata
         this.visibleProfiles = this.visibleProfiles.slice(1);
      
      }
    }
  }

  onSwipeLeft() {
    let swappingdata
    console.log('Swiped Left');
    if (this.visibleProfiles.length < this.profiles.length) {
      swappingdata=this.profiles
      const nextProfileIndex = this.visibleProfiles.length;
      if (nextProfileIndex < this.profiles.length) {
        this.visibleProfiles=swappingdata
        this.visibleProfiles=this.visibleProfiles.slice(0, -1)
      }
    }
  }

  goBack() {
    this.gesture = false;
    this.homepage = true;
  }

  removeProfile(index: number, action: string): void {
    console.log(`Profile ${index} removed with action: ${action}`);
    this.visibleProfiles.splice(index, 1);
  }
}
