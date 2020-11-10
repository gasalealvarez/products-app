import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component'; 
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from  './components/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
}, 
{
  path: 'newProduct',
  canActivate:[AuthGuard],
  component: NewProductComponent
},
{
  path: 'products',
  canActivate:[AuthGuard],
  component: ProductsComponent
},
{
  path: 'productDetail',
  canActivate:[AuthGuard],
  component: ProductDetailComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
