import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { AddGroupDialogComponent } from './dialogs/add-group-dialog/add-group-dialog.component';
import { AddListComponent } from './dialogs/add-list/add-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MyDayComponent } from './my-day/my-day.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    BottomNavBarComponent,
    AddGroupDialogComponent,
    AddListComponent,
    MyDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
