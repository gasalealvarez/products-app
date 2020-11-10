import { Inject } from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {

  constructor( public dialog : MatDialogRef<ModalProductComponent>,
     @Inject (MAT_DIALOG_DATA) public data: any, 
     public dialogRef: MatDialogRef<ModalProductComponent>) {} 
  
  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
