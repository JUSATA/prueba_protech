import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'proveedores/:id',component: ProveedorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }