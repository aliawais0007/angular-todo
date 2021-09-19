import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 title: string = "TODO List";
 
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.taskService.setDisplay("block");
  }

  
}
