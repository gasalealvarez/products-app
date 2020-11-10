import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css']
})
export class ModalCategoryComponent  {

  constructor(
    public dialogRef: MatDialogRef<ModalCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
