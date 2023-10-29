import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryItems = [
    {
      image: '../../assets/logo.jpg',
      description: 'Descrição da imagem 1'
    },
    {
      image: '../../assets/logo.webp',
      description: 'Descrição da imagem 2'
    },
    // Adicione mais itens conforme necessário
  ];
}