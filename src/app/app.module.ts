import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { BuyListComponent } from './buy-list/buy-list.component';
import { ItemSelectComponent } from './item-select/item-select.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { APIListComponent } from './api-list/api-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemDropdownComponent,
    ItemListComponent,
    HomeComponent,
    RodapeComponent,
    WishlistItemComponent,
    BuyListComponent,
    ItemSelectComponent,
    SidebarComponent,
    MainLayoutComponent,
    ProdutosComponent,
    GalleryComponent,
    APIListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
