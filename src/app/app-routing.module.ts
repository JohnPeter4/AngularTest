import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { APIListComponent } from './api-list/api-list.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      { path: 'item', component: ItemListComponent },
      //Tela inicial
    ]
  },
  {
    path: 'second',
    component: MainLayoutComponent,
    children: [
      { path: 'item', component: ProdutosComponent },
      // Rota para comunicar com a lista de produto ( Futuramente será utilizada para mostrar a lista de desejo)
    ]
  },
  {
    path: 'third',
    component: MainLayoutComponent,
    children: [
      { path: 'item', component: APIListComponent },
      // Rota para Comunicar com API
    ]
  },
  { path: '', redirectTo: 'main/item', pathMatch: 'full' }, // ROTA INCIAL
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
