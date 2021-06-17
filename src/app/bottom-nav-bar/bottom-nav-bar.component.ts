import { NewList } from './../dialogs/add-list/add-list.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddGroupDialogComponent } from '../dialogs/add-group-dialog/add-group-dialog.component';
import { AddListComponent } from '../dialogs/add-list/add-list.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.css']
})
export class BottomNavBarComponent implements OnInit {

  animal: string = 'hello';
  name: string = 'hi';

  newList: NewList = {
    title: '',
    color: '',
    icon: '',
    photo: ''
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openAddListDialog(): void {
    const dialogRef = this.dialog.open(AddListComponent, {
      width: '250px',
      data: this.newList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newList = result;
    });
  }

}
