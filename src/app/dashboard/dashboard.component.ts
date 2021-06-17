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
      "icon" :  "light_mode",
      "link" : "/my-day"
    },
    {
      "title" :  "Important",
      "icon" :  "grade",
      "link" : "/my-day"
    },
    {
      "title" :  "Planned",
      "icon" :  "table_view",
      "link" : "/my-day"
    },
    {
      "title" :  "Assigned to you",
      "icon" :  "person_outline",
      "link" : "/my-day"
    },
    {
      "title" :  "Tasks",
      "icon" :  "task",
      "link" : "/my-day"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
