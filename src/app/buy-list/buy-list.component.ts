import { Component, Input,DoCheck} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css']
})
export class BuyListComponent implements DoCheck {
  @Input() inputValue: any;
  inputValues: any[] = [];

  items = ["item1", "item2","item2","aaaaa","dammit", "item3","item3","item3","item3","item3","item3","item3"];
  id = [0,1,2];
  quantidade = 0;

  combinedData: { item: string; count: number }[] = [];

  ngDoCheck() {
    //recebe dados
    //atualiza a saída
      if (this.dataService.dataToShare !== undefined){
        // Chame a função combineData sempre que os dados mudarem
        this.Atualiza();
        //limpa o dados recebido, para que não só execute quando receber um novo dado
      }
  }
  Atualiza(){
    this.inputValues.push(this.dataService.dataToShare);
    this.combinedData = this.combineData(this.inputValues);
    //console.log("LIST:",this.dataService.dataToShare);    
  }
  combineData(inputValues: string[]): { item: string; count: number }[] {
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
       const result: { item: string, count: number }[] = [];
       itemMap.forEach((count, item) => {
        combinedData.push({ item, count });
       })
    
    return combinedData;
  }
  //remove um item especifico
  removeItem (itemToRemove: string){
    this.inputValues = this.inputValues.filter(item => item !== itemToRemove);
    this.combinedData = this.combineData(this.inputValues);
    //console.log(this.combinedData);
  }

  constructor(private dataService: DataService) {}
}
