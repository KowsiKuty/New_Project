import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareserviceService } from '../shareservice.service';
import { SwiperModule } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
  profilePhotos = [
    'assets/profile1.jpg',
    'assets/profile2.jpg',
    'assets/profile3.jpg'
  ];
  
  profileDescription = 'Profile details go here.';
  profile: boolean=true;
  homepage: boolean=false;

  constructor(private router: Router, private route: ActivatedRoute,private Sharesrv:ShareserviceService) {}
  @ViewChild('.scroll-x') scrollContainer!: ElementRef;
  @ViewChild('scroll-left') scrollLeftButton!: ElementRef;
  @ViewChild('scroll-right') scrollRightButton!: ElementRef;
  @Input() profileDetailsimage: any;
  scrollAmount = 520;
  ngOnInit(): void {
      
    const profileData = this.Sharesrv.particular_id.value
   this.profileDetailsimage = JSON.parse(profileData); 
  this.loadProfileDetails(this.profileDetailsimage)
  }
  profileId!: number;
  profileDetails: any ;


  loadProfileDetails(id: number) {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      const profiles = JSON.parse(storedProfiles);
      this.profileDetails = profiles.find((profile: any) => profile.id === id);
    }
  }
  // ngAfterViewInit(): void {
  //   this.scrollLeftButton.nativeElement.addEventListener('click', () => {
  //     this.scrollContainer.nativeElement.scrollBy({
  //       left: -this.scrollAmount,
  //       behavior: 'smooth'
  //     });
  //   });

  //   this.scrollRightButton.nativeElement.addEventListener('click', () => {
  //     this.scrollContainer.nativeElement.scrollBy({
  //       left: this.scrollAmount,
  //       behavior: 'smooth'
  //     });
  //   });
   
  // }


  goBack() {
   this.homepage=true;
   this.profile=false;
  }
}
