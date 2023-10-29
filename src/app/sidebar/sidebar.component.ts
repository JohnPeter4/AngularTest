import { Component, DoCheck } from '@angular/core';
import {DataService } from'../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements DoCheck{
  inputValues: any[] = [];
  prices:number[] = [];
  visible:boolean = false;
//  Teste:number = 0;

constructor(private dataService: DataService) {}


combinedData: { item: string; count: number }[] = [];

ngDoCheck() {
  //visibilidade
  this.visible = this.dataService.Sidebar;
  //recebe dados
  //atualiza a saída
    if (this.dataService.dataToShare !== undefined){
      // Chame a função combineData sempre que os dados mudarem
      this.Atualiza();
      //limpa o dados recebido, para que não só execute quando receber um novo dado
      this.dataService.dataToShare = undefined;
    }
}
Atualiza(){
  this.inputValues.push(this.dataService.dataToShare);
  this.prices.push(this.dataService.Preco);
  this.combinedData = this.combineData(this.inputValues,this.prices);
  //console.log("LIST:",this.dataService.dataToShare);    
}
combineData(inputValues: string[],prices: number[]): { item: string; count: number }[] {
  //Verifica dados recebidos
  const combinedData: { item: string; count: number }[] = [];
  //Filtro itens repetidos
  const itemMap = new Map<string, number>();

  // Contar a ocorrência de cada elemento
  for (const item of inputValues) {
    if (itemMap.has(item)) {
      itemMap.set(item, itemMap.get(item)! + 1);
    } else {
      itemMap.set(item, 1);
    }
  }
     // Converter o mapa em uma array de objetos
     itemMap.forEach((count, item) => {
      combinedData.push({ item, count });
     })
  
  return combinedData;
}
//remove um item especifico
removeItem (itemToRemove: string){
  this.inputValues = this.inputValues.filter(item => item !== itemToRemove);
  this.combinedData = this.combineData(this.inputValues,this.prices);
  this.dataService.Notification = this.combinedData.length; // salva valores de cada nome 
  console.log(this.combinedData);
}
//Pega o preço
getPriceForItem(itemName: string): number {
  const index = this.inputValues.findIndex(item => item === itemName);
    this.dataService.Notification = this.combinedData.length;// salva valores de cada nome
  
  if (index !== -1 && index < this.prices.length) { 
    return this.prices[index];
  }
  return 0; // Retorna 0 ou um valor padrão caso o preço não seja encontrado
  
}

}
