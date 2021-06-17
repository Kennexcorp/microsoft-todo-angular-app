import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface NewList {
  title: string;
  icon: string;
  color: string;
  photo: string;
}
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewList
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
