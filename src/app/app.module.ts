import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalCategoryComponent } from './components/dialogs/modal-category/modal-category.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

/*Firebase*/
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';

/* ngx-timeago */
import { TimeagoModule, TimeagoIntl, TimeagoFormatter, TimeagoCustomFormatter } from 'ngx-timeago';
import { dateformat } from 'dateformat'; 
import swal from 'sweetalert2';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ModalProductComponent } from './components/dialogs/modal-product/modal-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    ModalCategoryComponent,
    ToolbarComponent,
    NewProductComponent,
    LoginComponent, 
    ModalProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule, 
    AngularFirestoreModule,
    FlexLayoutModule,  
    AngularFireModule.initializeApp(environment.firebaseConfig),
    TimeagoModule.forRoot({formatter: { provide: TimeagoFormatter, 
      useClass: TimeagoCustomFormatter },})
    
  ],
  providers: [TimeagoIntl],
  bootstrap: [AppComponent]

})
export class AppModule { }
