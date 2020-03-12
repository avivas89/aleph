import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
  	MatMenuModule,
  	MatToolbarModule,
    MatSidenavModule,
  	MatButtonModule,
  	MatIconModule,
  	MatInputModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
