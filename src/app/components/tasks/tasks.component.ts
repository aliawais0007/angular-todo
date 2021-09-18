import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  faTimes = faTimes;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks );
  }

  handleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe((res)=>console.log(res))
  }

  onDelete(task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks = this.tasks.filter((elm)=>elm.id!==task.id))
  }

}
