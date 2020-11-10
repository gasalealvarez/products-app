import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  DataServiceService } from '../services/data-service.service';
import { TimeagoIntl } from 'ngx-timeago';
import { strings as englishStrings } from 'ngx-timeago/language-strings/es';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { productI } from '../models/product.interface';
import Swal from 'sweetalert2';
import { MatDialog} from '@angular/material/dialog'; 
import { ModalProductComponent } from '../dialogs/modal-product/modal-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor( private productSVC : DataServiceService, public intl: TimeagoIntl,
     public dialog: MatDialog) {   
    intl.strings = englishStrings;
    intl.changes.next();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

ngOnInit(): void {
  this.productSVC.getProducts().subscribe(res => this.dataSource.data= res);
}

  displayedColumns: string[] = ['producto', 'codigo', 'precioTarjeta', 'precioFinal' , 'actions'];
  
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditPost(product: productI){
    this.openDialog(product);
  }

  openDialog(product?: productI) {

    const config = {
      data: {
        message: product ? 'Editar Producto' : 'Nuevo Producto',
        content: product
      }
    };
    const dialogRef = this.dialog.open(ModalProductComponent, config);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  onDeleteProduct(product: productI){ result => {
    console.log('result ', result);
  }
    Swal.fire({
      title: 'Estas seguro?',
      text: "El producto se borrará !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productSVC.onDeleteProduct(product).then(() => {
        Swal.fire('Borrado!',  'El producto ha sido borrado.', 'success');
      }).catch(()=> { Swal.fire('Error!',  'El producto no ha sido borrado.', 'success');
    });
  }
});
}
}
