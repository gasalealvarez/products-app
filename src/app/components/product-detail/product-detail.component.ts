import { Component, OnInit } from '@angular/core';
import { TimeagoIntl } from 'ngx-timeago';
import { strings as englishStrings } from 'ngx-timeago/language-strings/es';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {  DataServiceService } from '../services/data-service.service';
import { productI } from '../models/product.interface';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DatePipe]
})
export class ProductDetailComponent implements OnInit {

  constructor(intl: TimeagoIntl, private productSVC : DataServiceService, 
      private formBuilder: FormBuilder, private datePipe: DatePipe) { 
    intl.strings = englishStrings;
    intl.changes.next();
    this.createContactForm();
   }

   public product: productI[];
   contactForm: FormGroup;
   public fecha: Date;
   public buscando=false;
  
  ngOnInit(): void {
    
  }

  findCode() {
    this.buscando= true;
    let id = this.contactForm.get('codigo').value;

    this.productSVC.getProduct(id)
      .subscribe(  datos =>   { 
        this.product = datos;
        this.refreshForm(this.product[0]);
      });         
}

refreshForm(product: productI) {
  try {
    this.contactForm.patchValue({ 
      producto : [product.producto ], 
      precioTarjeta : [ product.precioTarjeta ]  , 
      precioFinal : [ product.precioFinal ]
    });
    this.buscando=false;
    this.fecha= product.fechaActualizacion; 
  }  catch (error) {
    this.contactForm.patchValue({
      producto : [], 
      precioTarjeta : [],
      precioFinal : [] ,
    })
    this.fecha=null;
    Swal.fire('El codigo  no corresponde con ningun producto')
    this.buscando=false;
   }
}

formatDate(date ){
  // este codigo no se usa 
  console.log(date)
  let format=`yyyy-MM-dd ==== z`;
  let locale='es-AR';
  let dateStr = this.datePipe.transform(date, format);
  let dateStrWithLocale = dateStr.replace('====', locale);
  return dateStrWithLocale;
}

createContactForm(){
  this.contactForm = this.formBuilder.group({
    producto : [''], 
    codigo : [''], 
    precio : [''], 
    precioFinal : [''], 
    precioTarjeta : [''],
    fechaActualizacion :  ['']
  });
}
}