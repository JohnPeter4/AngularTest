import { Component,Input,Output,OnInit,EventEmitter,ViewChild, DoCheck } from '@angular/core';
import { ImageService } from '../image.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements DoCheck {
equipamento:number = 0;
estilo:string = "";
selectOld:number =0;
//Inicializa lista de produtos
wishlistItems: { name: string; imageUrl: string; url: string; isInWishlist: boolean;price: number }[] = [
  { name: 'legging escura', imageUrl: '', url: 'assets/legging.webp', isInWishlist: false, price: 189.99 },
  { name: 'legging escura curta', imageUrl: '', url: 'assets/legging2.webp', isInWishlist: false, price: 160.00 },
  { name: 'legging escura de esportes', imageUrl: '', url: 'assets/legging3.webp', isInWishlist: false, price: 250.00 },
  { name: 'meia curta Branca', imageUrl: '', url: 'assets/meia.webp', isInWishlist: false, price: 25.00 },
  { name: 'meia larga grande', imageUrl: '', url: 'assets/meia2.webp', isInWishlist: false, price: 49.99 },
  { name: 'mochila preta', imageUrl: '', url: 'assets/mochila.webp', isInWishlist: false, price: 239.00 },
  { name: 'mochila vermelha', imageUrl: '', url: 'assets/mochila2.webp', isInWishlist: false, price: 165.80 },
  { name: 'mochila vermelha larga', imageUrl: '', url: 'assets/mochila3.webp', isInWishlist: false, price: 177.80 },
  { name: 'Camiseta de futebol', imageUrl: '', url: 'assets/roupa1.webp', isInWishlist: false, price: 234.00 },
  { name: 'Tênis Branco GINKA', imageUrl: '', url: 'assets/tenis.webp', isInWishlist: false, price: 356.00 },
  { name: 'Tênis Vermelho e preto', imageUrl: '', url: 'assets/tenis2.webp', isInWishlist: false, price: 178.00 },
  { name: 'Tênis marrom', imageUrl: '', url: 'assets/tenis3.webp', isInWishlist: false, price: 199.00 },
  { name: 'Tênis laranja', imageUrl: '', url: 'assets/tenis4.webp', isInWishlist: false, price: 234.00 },
  { name: 'Tênis marrom e preto', imageUrl: '', url: 'assets/tenis5.webp', isInWishlist: false, price: 210.00 },
  { name: 'Tênis preto', imageUrl: '', url: 'assets/tennis.webp', isInWishlist: false, price: 499.00 },
  { name: 'Skate', imageUrl: '', url: 'assets/skate.jpg', isInWishlist: false, price: 179.90 },
  // Adicione mais itens à lista de desejos aqui com suas respectivas URLs
];

  ngDoCheck(){
  
    this.estilo = this.dataService.estilo;
    //console.log("O estilo é",this.estilo);
    const imageWidth = 200; // Substitua pelo valor real da largura da imagem.
    const imageHeight = 200; // Substitua pelo valor real da altura da imagem.
    
    this.imageService.setImageSize(imageWidth, imageHeight);

 //------------------------------Inserir produtos com bases no componete "item-select"----------------------------------
 //Verifica se houve mudança no selelect
 this.selectOld = this.equipamento;
 //Equipamento
 this.equipamento = Number(this.dataService.equipamento);
 if (this.selectOld !== this.equipamento && (this.equipamento || this.equipamento === 0)){
  this.wishlistItems.length = 0;
 if(this.equipamento === 0) {
  const novosItens = [
    { name: 'legging escura', imageUrl: '', url: 'assets/legging.webp', isInWishlist: false, price: 189.99 },
    { name: 'legging escura curta', imageUrl: '', url: 'assets/legging2.webp', isInWishlist: false, price: 160.00 },
    { name: 'legging escura de esportes', imageUrl: '', url: 'assets/legging3.webp', isInWishlist: false, price: 250.00 },
    { name: 'meia curta Branca', imageUrl: '', url: 'assets/meia.webp', isInWishlist: false, price: 25.00 },
    { name: 'meia larga grande', imageUrl: '', url: 'assets/meia2.webp', isInWishlist: false, price: 49.99 },
    { name: 'mochila preta', imageUrl: '', url: 'assets/mochila.webp', isInWishlist: false, price: 239.00 },
    { name: 'mochila vermelha', imageUrl: '', url: 'assets/mochila2.webp', isInWishlist: false, price: 165.80 },
    { name: 'mochila vermelha larga', imageUrl: '', url: 'assets/mochila3.webp', isInWishlist: false, price: 177.80 },
    { name: 'Camiseta de futebol', imageUrl: '', url: 'assets/roupa1.webp', isInWishlist: false, price: 234.00 },
    { name: 'Tênis Branco GINKA', imageUrl: '', url: 'assets/tenis.webp', isInWishlist: false, price: 356.00 },
    { name: 'Tênis Vermelho e preto', imageUrl: '', url: 'assets/tenis2.webp', isInWishlist: false, price: 178.00 },
    { name: 'Tênis marrom', imageUrl: '', url: 'assets/tenis3.webp', isInWishlist: false, price: 199.00 },
    { name: 'Tênis laranja', imageUrl: '', url: 'assets/tenis4.webp', isInWishlist: false, price: 234.00 },
    { name: 'Tênis marrom e preto', imageUrl: '', url: 'assets/tenis5.webp', isInWishlist: false, price: 210.00 },
    { name: 'Tênis preto', imageUrl: '', url: 'assets/tennis.webp', isInWishlist: false, price: 499.00 },
    { name: 'Skate', imageUrl: '', url: 'assets/skate.jpg', isInWishlist: false, price: 179.90 },
  ];
  this.wishlistItems.push(...novosItens);
  }
 //Tenis
 else if(this.equipamento === 1 ){
  const novosItens = [
    { name: 'Tênis Branco GINKA', imageUrl: '', url: 'assets/tenis.webp', isInWishlist: false, price: 356.00 },
    { name: 'Tênis Vermelho e preto', imageUrl: '', url: 'assets/tenis2.webp', isInWishlist: false, price: 178.00 },
    { name: 'Tênis marrom', imageUrl: '', url: 'assets/tenis3.webp', isInWishlist: false, price: 199.00 },
    { name: 'Tênis laranja', imageUrl: '', url: 'assets/tenis4.webp', isInWishlist: false, price: 234.00 },
    { name: 'Tênis marrom e preto', imageUrl: '', url: 'assets/tenis5.webp', isInWishlist: false, price: 210.00 },
    { name: 'Tênis preto', imageUrl: '', url: 'assets/tennis.webp', isInWishlist: false, price: 499.00 },
  ];
  this.wishlistItems.push(...novosItens);
 }
 //Roupa
else if (this.equipamento === 2){
  const novosItens = [
    { name: 'legging escura', imageUrl: '', url: 'assets/legging.webp', isInWishlist: false, price: 189.99 },
    { name: 'legging escura curta', imageUrl: '', url: 'assets/legging2.webp', isInWishlist: false, price: 160.00 },
    { name: 'legging escura de esportes', imageUrl: '', url: 'assets/legging3.webp', isInWishlist: false, price: 250.00 },
    { name: 'meia curta Branca', imageUrl: '', url: 'assets/meia.webp', isInWishlist: false, price: 25.00 },
    { name: 'meia larga grande', imageUrl: '', url: 'assets/meia2.webp', isInWishlist: false, price: 49.99 },
    { name: 'Camiseta de futebol', imageUrl: '', url: 'assets/roupa1.webp', isInWishlist: false, price: 234.00 },
  ];
  this.wishlistItems.push(...novosItens);
 }
 //mochila
else if(this.equipamento === 3){
  const novosItens = [
    { name: 'mochila preta', imageUrl: '', url: 'assets/mochila.webp', isInWishlist: false, price: 239.00 },
    { name: 'mochila vermelha', imageUrl: '', url: 'assets/mochila2.webp', isInWishlist: false, price: 165.80 },
    { name: 'mochila vermelha larga', imageUrl: '', url: 'assets/mochila3.webp', isInWishlist: false, price: 177.80 },
  ];
  this.wishlistItems.push(...novosItens);
}
 //Equipamento
 else if(this.equipamento === 4){
  const novosItens = [
    { name: 'Skate', imageUrl: '', url: 'assets/skate.jpg', isInWishlist: false, price: 179.90 },
  ];
  this.wishlistItems.push(...novosItens);
 }
}
  // Adicione mais itens à lista de desejos aqui com suas respectivas URLs
    }


addToWishlist(isInWishlist: boolean, item: any) {
  item.isInWishlist = isInWishlist;
  if (isInWishlist) {
    // Adicione código aqui para adicionar o item à lista de desejos
  } else {
    // Adicione código aqui para remover o item da lista de desejos
  }
}
//------------------------FUNÇÂO DE COLOCAR TAMANHO NA IMAGEM ---------------------------
constructor(private imageService: ImageService,private dataService: DataService) {}
//-------------------ITEM_LIST---------------------


}
  
