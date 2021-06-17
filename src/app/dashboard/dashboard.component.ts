import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: any[] = [
    {
      "title" :  "My Day",
      "icon" :  "light_mode"
    },
    {
      "title" :  "Important",
      "icon" :  "grade"
    },
    {
      "title" :  "Planned",
      "icon" :  "table_view"
    },
    {
      "title" :  "Assigned to you",
      "icon" :  "person_outline"
    },
    {
      "title" :  "Tasks",
      "icon" :  "task"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
