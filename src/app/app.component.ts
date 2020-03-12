import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { SearchDialogComponent } from './search-dialog/search-dialog.component';

@Component({
  selector: 'alp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aleph';

   constructor(private dialog: MatDialog) {}

   openDialog() {

        const dialogConfig = new MatDialogConfig();

        //dialogConfig.disableClose = true;
        //dialogConfig.autoFocus = true;
        dialogConfig.height = '100%';
        dialogConfig.width = '100vw';
        dialogConfig.maxWidth = '100vw'

        this.dialog.open(SearchDialogComponent, dialogConfig);
   }
}
