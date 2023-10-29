import { Component,EventEmitter,OnChanges,Input, Output,OnInit, SimpleChanges } from '@angular/core';
import { ImageService } from '../image.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  @Input() name: string ="";
  @Input() price: number = 0;
  @Input() url: string ="";
  @Input() customSrc: string ="";
  @Input() isInWishlist: boolean = false;
  @Output() wishlistToggle = new EventEmitter<boolean>();
  //Variavel
  defaultPath: string = "M11.466 22.776a.746.746 0 0 0 1.068 0l9.594-9.721c2.491-2.523 2.491-6.63 0-9.154C20.918 2.675 19.309 2 17.596 2s-3.321.675-4.531 1.9L12 4.98l-1.065-1.079A6.323 6.323 0 0 0 6.404 2a6.324 6.324 0 0 0-4.532 1.901c-2.491 2.524-2.491 6.631 0 9.153zM2.939 4.954A4.84 4.84 0 0 1 6.403 3.5c1.308 0 2.538.517 3.463 1.455l1.599 1.62a.773.773 0 0 0 1.067 0l1.599-1.621A4.847 4.847 0 0 1 17.596 3.5a4.84 4.84 0 0 1 3.464 1.454c1.917 1.943 1.917 5.104 0 7.048L12 21.183l-9.061-9.182c-1.917-1.942-1.917-5.104 0-7.047z";
  customPath: string = "M11.466 22.776a.746.746 0 0 0 1.068 0l9.594-9.721C26.129 9.002 23.286 2 17.596 2 14.179 2 12.611 4.511 12 4.98 11.386 4.509 9.828 2 6.404 2 .732 2-2.146 8.984 1.873 13.055z";
  elementoVisivel:boolean =false;


//Trocar o Path de desejo e adiciona ou não na lista
  togglePath() {
    this.isInWishlist = !this.isInWishlist;
    this.wishlistToggle.emit(this.isInWishlist);
  }
//Utiliza os componentes externos
  constructor(private imageService: ImageService,private dataService: DataService) {}
//Envia dados para outro componente
  Comprar(){
    this.dataService.dataToShare = this.name;
    this.dataService.Preco = this.price;
    console.log("WHISHLITS:",this.dataService.dataToShare);
  }
  ///Escalonamento do tamanho dos componentes
  getWidth(): string {
   return this.imageService.imageSize.width + 'px';
  }
  getWidthSVG(): string {
    const num1 = this.imageService.imageSize.width - (this.imageService.imageSize.width * 0.85);
    return num1 + 'px';
  }
  toggleWishlist() {
    this.elementoVisivel = !this.elementoVisivel;
    this.wishlistToggle.emit(this.isInWishlist);
    console.log( this.isInWishlist );
  }
  
}
