import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Task} from "../../Task";

@Component({
  selector: 'app-taskmodal',
  templateUrl: './taskmodal.component.html',
  styleUrls: ['./taskmodal.component.scss']
})
export class TaskmodalComponent implements OnInit {
  faTimes = faTimes;
  title: string;
  date: string;
  reminder: boolean;
  display: string;
 @Output() closeClick = new EventEmitter();
 @Output() addNewTask = new EventEmitter();

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.display = this.taskService.display;
  }
  AfterContentInit() {
    this.display = this.taskService.display;
  }

  handleClose(){
    this.taskService.setDisplay("none");
  }

  handleSubmit(){
    const task: Task = {
      title: this.title,
      date: this.date,
      reminder: this.reminder
    }
    this.addNewTask.emit(task)
  }
  
}
