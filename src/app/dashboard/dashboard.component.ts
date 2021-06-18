import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Category {
  title: string;
  icon: string;
  slug: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: Category[] = [
    {
      "title" :  "My Day",
      "icon" :  "light_mode",
      "slug" : "day"
    },
    {
      "title" :  "Important",
      "icon" :  "grade",
      "slug" : "important"
    },
    {
      "title" :  "Planned",
      "icon" :  "table_view",
      "slug" : "planned"
    },
    {
      "title" :  "Assigned to you",
      "icon" :  "person_outline",
      "slug" : "personal"
    },
    {
      "title" :  "Tasks",
      "icon" :  "task",
      "slug" : "tasks"
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewCategory(category: Category) {
    this.router.navigate(['/category', {slug: category.slug, title: category.title}]);
  }

}
