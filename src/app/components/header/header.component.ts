import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 title: string = "TODO List"
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log("Clicked")
  }
}
