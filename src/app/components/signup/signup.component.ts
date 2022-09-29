import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SingupComponent implements OnInit {


  icon = 'mode-night';
  style = 'light-mode';

  constructor() { }

  ngOnInit(): void {
  }

  changeMode() {
    //throw new Error('Method not implemented.');
    if (this.style == 'light-mode'){
      this.style = 'dark-mode';
      
    } else {
      this.style = 'light-mode';
    }
  }

}
