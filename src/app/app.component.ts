import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  rounting_logo:boolean=false;
  staticProfiles = [
    {"id":1,"photo":"assets/maddona.jpeg","name":"Maddona","description":"Birth:19 May 1992 ,Native :Kerala ,Occupation: Actress"},
    {"id":2,"photo":"assets/sanjaana.jpg","name":"Sanjaana","description":"Birth:6 August 1982 , Native: West Bengal, Occupation: Actress"},
    {"id":3,"photo":"assets/nazrriya.jpg","name":"Nazriya","description":"Birth:20 December 1994 , Native:Thiruvananthapuram, Occupation: Actress, Host, Producer, Singer"},
    {"id":4,"photo":"assets/rashika.jpg","name":"Rashika","description":"Birth:30 November 1990, Native: Delhi, Occupation: Actress"},
    {"id":5,"photo":"assets/samandha.jpg","name":"Samandha","description":"Birth:28 April 1987 , Native: Pallavaram, Occupation: Actress"}
  ];
  title = 'System-Design';
  ngOnInit() {
 this.login()
}
login(){
  let sourceconfirm= window.confirm("Login Confirmation , DO You Login?");
  if(!sourceconfirm){
    this.rounting_logo=false;
    this.reload()
    return;    
  }else{
  this.rounting_logo=true;
  }
}


reload(){
  this.login()
}
}
