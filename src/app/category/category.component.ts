import { SuggestionsComponent } from './../my-day/suggestions/suggestions.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  pageTitle: string = '';
  showOnlyCompletedTask = false;
  defaultFilter: string = 'Today';
  pageSlug: string = 'day'

  openBottomSheet(): void {
    this._bottomSheet.open(SuggestionsComponent);
  }

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.paramMap.get('title')!;
    this.pageSlug = this.route.snapshot.paramMap.get('slug')!;
  }

  toggleCompletedStatus(){
    this.showOnlyCompletedTask = this.showOnlyCompletedTask ? false : true;
  }
}
