import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalCategoryComponent } from '../dialogs/modal-category/modal-category.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { productI } from '../models/product.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from '../services/data-service.service';
import { ModalProductComponent } from '../dialogs/modal-product/modal-product.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar, private dataService : DataServiceService  ) { 
  this.createContactForm();
}

@Input() product : productI;
contactForm: FormGroup;
valor= 0;
submitted = false;
todayNumber: number = Date.now();
todayDate : Date = new Date();
todayString : string = new Date().toDateString();
todayISOString : string = new Date().toISOString();

ngOnInit(): void {
  if (this.product != undefined ) {
  this.contactForm.patchValue({ 
    id :  this.product.id , 
    producto : this.product.producto , 
    codigo :  this.product.codigo ,
    precio :  this.product.precio , 
    precioTarjeta :  this.product.precioTarjeta   , 
    precioFinal :  this.product.precioFinal 
  });
 }
}

createContactForm(){
  this.contactForm = this.formBuilder.group({
    id :  ['',  [Validators.required]], 
    producto : ['',  [Validators.required]], 
    codigo : ['',  [Validators.required]], 
    precio : ['',  [Validators.required]], 
    precioFinal : ['',  [Validators.required]], 
    precioTarjeta : ['',  [Validators.required]],
    fechaActualizacion : new Date().getTime()
  });
}

 // convenience getter for easy access to form fields
 get f() { return this.contactForm.controls; }

onSubmit() {
  console.log("enviando datos");
  this.submitted = true;

  // stop here if form is invalid
  if (this.contactForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
}

// openDialog(): void {
//   console.log('paso aca');
//   const dialogRef = this.dialog.open(ModalCategoryComponent);
//   dialogRef.afterClosed().subscribe(result => 
//     console.log(`dialog result${result}`))
// }

codeGenerator() {
  var s = "2017-03-20T12:00:00Z"
  var d = new Date(s).getTime();

// Browser default, implementation dependent
  console.log(d.toString());

// Use toLocaleString with options, implementation dependent and problematic
// console.log(d.toLocaleString(undefined,{
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   hour: '2-digit',
//   hour12: false,
//   minute: '2-digit',
//   second: '2-digit'
// }));
  // this.valor = this.valor +1
  // this.contactForm.controls.codigo.setValue(this.valor);

}

calculador(){
  const precio= this.contactForm.controls.precioFinal.value;
  const resultado = (precio * 1.15);
  
  this.contactForm.controls.precioTarjeta.setValue(resultado.toFixed(2));
}

addProduct() {
  let edit_New="";

  console.log(this.todayNumber)
  console.log(this.todayDate)  
  console.log(this.todayString) 
  console.log(this.todayISOString) 

  
    // if (this.product == undefined) {
    //   let  productoLocal = {
    //     producto : this.contactForm.get("producto").value, 
    //     codigo : this.contactForm.get("codigo").value, 
    //     precio: this.contactForm.get("precio").value, 
    //     precioFinal : this.contactForm.get("precioFinal").value, 
    //     precioTarjeta : this.contactForm.get("precioTarjeta").value, 
    //     fechaActualizacion : this.contactForm.get("fechaActualizacion").value 
    //   } 
    //   console.log(productoLocal) ;
   
    //   this.dataService.addProduct(productoLocal);
    //   edit_New="Agregado";
    // }  else {
    //   this.dataService.editProduct(this.contactForm.value);
    //   edit_New="Editado";
    // }
    
    
    // this._snackBar.open( edit_New + ' con exito :' + this.contactForm.get("producto").value , '' ,{
    //   duration: 1000,
    // });
    // this.submitted = false;
    // this.contactForm.reset();
  }
}
