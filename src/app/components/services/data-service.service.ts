import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { productI } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private productsCollection: AngularFirestoreCollection<productI>;
  private products :Observable<productI[]>; 
  private productDoc: AngularFirestoreDocument<productI>;

  constructor(private afs: AngularFirestore) { 
    this.productsCollection = afs.collection<productI>('productos');
    this.products = this.productsCollection.valueChanges();
  }

  public getProducts(): Observable<productI[]> {
    return this.afs.collection('productos')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as productI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getProduct(id: string): Observable<productI[]> {

    this.productsCollection = this.afs.collection('productos', ref => ref.where('codigo', '==', id));
    return  this.products = this.productsCollection.snapshotChanges().
    pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as productI;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
        )
      )
  }

    // getOneBook(idBook: string) {
    //   this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    //   return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
    //     if (action.payload.exists === false) {
    //       return null;
    //     } else {
    //       const data = action.payload.data() as BookInterface;
    //       data.id = action.payload.id;
    //       return data;
    //     }
    //   }));
    // }
  
  public addProduct(product : productI) { 

    // if (product.idProducto) {
    //   // return this.produ.doc(post.id).update(postObj);
    // } else {
      // return this.productCollection.add(product);

      console.log('la fecha ingresada es ' , product.fechaActualizacion)
      return this.afs.collection('productos').add(product);
  }

  public editProduct( product : productI) {

    return this.productsCollection.doc(product.id).update(product);
  }

  onDeleteProduct(Product : productI){
    return this.productsCollection.doc(Product.id).delete();
  }
}

