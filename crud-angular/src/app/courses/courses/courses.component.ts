import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses:Course[] = [
    {_id:'1', name:'angular',category:'Front-End'}
  ];
  displayedColumns = ['name','category']



  constructor(){
    //this.courses = []; pode-se iniciar a cariavel por aqui tb;
  }

  ngOnInit():void {

  }

}
