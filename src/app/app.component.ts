import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  display : boolean = false;
  username : string = 'username';
  title = 'Demo';
  compteur = 0;
  tableau  = new Array();
  constructor(){}
  ngOnInit(){
  }
  ClickEvent(){
    this.display = !this.display;
    console.log(this.compteur++);
    this.tableau.push(this.compteur);
  }
}