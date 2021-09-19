import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() display: string;
  @Output() handleModal = new EventEmitter();
  faTimes = faTimes;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks );
  }

  handleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe(()=> true)
  }

  onDelete(task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks = this.tasks.filter((elm)=>elm.id!==task.id))
  }
  
  addNewTask(task: Task){
    this.taskService.addTask(task).subscribe((data)=>this.tasks.push(data))
  }

}
