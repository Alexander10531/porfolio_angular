import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  days : string = "00"; 
  hours : string = "00"; 
  minutes : string = "00"; 
  seconds : string = "00"; 
  countDownDate : number = new Date("Dec 2, 2024 00:00:00").getTime();

  constructor(){

    let interval = setInterval(() => {
      
      let now : number = new Date().getTime();
      let distance = this.countDownDate - now; 

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
      
      this.days = this.formatTime(this.days);
      this.hours = this.formatTime(this.hours); 
      this.minutes = this.formatTime(this.minutes); 
      this.seconds = this.formatTime(this.seconds); 


    }, 1000)

  }

  public formatTime(fecha : string) : string{
    return fecha.length == 1 ? `0${fecha}` : fecha;   
  }

}