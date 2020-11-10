import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCardModule }  from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const myModule = [ 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    MatDividerModule, 
    MatTableModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatProgressSpinnerModule
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    myModule
  ],
  exports: [ myModule ]
})
export class MaterialModule { }
