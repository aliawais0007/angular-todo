import { Injectable, Input } from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs"
import { Subject } from 'rxjs/internal/Subject';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../Task";

const httpOptions = {
  headers: new HttpHeaders({
    ContentType:"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";
  private readonly _display = new BehaviorSubject<string>("none");
  public display$ = this._display.asObservable();


  constructor(private http: HttpClient) { }
  get display(): string {
    return this._display.getValue();
  }

  set display(value: string) {
    this._display.next(value);
  }

  setDisplay(value: string){
    
    this.display = value
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }

  updateReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task) : Observable<Task>{
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(url, task, httpOptions);
  }
}
