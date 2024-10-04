import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShareserviceService } from '../shareservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() valueEmitted = new EventEmitter<string>();
  profiles = [
    { id: 1, photo: 'assets/maddona.jpeg', description: 'Birth:19 May 1992 ,Native :Kerala ,Occupation: Actress' },
    { id: 2, photo: 'assets/sanjaana.jpg', description: 'Birth:6 August 1982 , Native: West Bengal, Occupation: Actress' },
    { id: 3, photo: 'assets/nazrriya.jpg', description: 'Birth:20 December 1994 , Native:Thiruvananthapuram, Occupation: Actress, Host, Producer, Singer' },
    { id: 4, photo: 'assets/rashika.jpg', description: 'Birth:30 November 1990, Native: Delhi, Occupation: Actress' },
    { id: 5, photo: 'assets/samandha.jpg', description: 'Birth:28 April 1987 , Native: Pallavaram, Occupation: Actress' }
  ];
  gentures:boolean=false;
  profile: boolean=false;
  homepages: boolean=true;
  storedProfiles:any;
  startX: number = 0;
  swipedLeft = false;
  swipedRight = false;
  imagedata:any;
  constructor( private router: Router,private Sharesrv:ShareserviceService) {}

  ngOnInit(): void {
    // localStorage.setItem('profiles', JSON.stringify(this.profiles));

    this.storedProfiles = localStorage.getItem('profiles');
    if (this.storedProfiles) {
      this.profiles = JSON.parse(this.storedProfiles);
    }
this.storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
console.log(this.storedProfiles);
this.imagedata=this.storedProfiles.length
if (this.startIndex > 0) {
  this.startIndex -= 4;
  this.disableNext = false;
}
if (this.startIndex === 0) {
  this.disablePrevious = true; 
}
  }

  removeProfile(index: number, action: string): void  {
   
    let sourceconfirm= window.confirm("Are you sure you want to delete this profile?");
    if(!sourceconfirm){
      return ;
    }else{
      this.storedProfiles.splice(index, 1);
      this.imagedata=this.storedProfiles.length
      if (this.startIndex > 0) {
        this.startIndex -= 4;
        this.disableNext = false;
      }
      if (this.startIndex === 0) {
        this.disablePrevious = true; 
      }
      if (this.startIndex + 4 < this.imagedata) {
        this.startIndex += 4; 
        this.disablePrevious = false; 
      }
      if (this.startIndex + 4 >= this.imagedata) {
        this.disableNext = true; 
      }
      // this.toastr.show("Profile removed by"+action );
    }
  }

  goToGestureScreen() {
    this.homepages=false;
   this.gentures=true
   this.profile=false;
  }
  selectedProfileimage: any;
  goToProfileDetails(profile: number) {
    this.selectedProfileimage = profile;
    this.Sharesrv.particular_id.next(this.selectedProfileimage);
    this.homepages=false;
    this.profile=true;
    this.gentures=false;
  }
  startIndex: number = 0; 
  disablePrevious: boolean=false;
  disableNext: boolean=false;
  getPreviousData() {
    if (this.startIndex > 0) {
      this.startIndex -= 4;
      this.disableNext = false;
    }
    if (this.startIndex === 0) {
      this.disablePrevious = true; 
    }
  }

  getNextData() {
    if (this.startIndex + 4 < this.imagedata) {
      this.startIndex += 4; 
      this.disablePrevious = false; 
    }
    if (this.startIndex + 4 >= this.imagedata) {
      this.disableNext = true; 
    }
  }
}
