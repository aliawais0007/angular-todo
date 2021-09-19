import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TODO List';
  display: string = "none"

  handleModal(){
    this.display === "block" ? this.display = "none" : this.display = "block";
  }
}
