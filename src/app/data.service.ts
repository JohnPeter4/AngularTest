import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataToShare: any;
  Preco:any;
  equipamento: any;
  estilo:string ="";
  Sidebar:boolean = false;
  Notification:number = 0;
}
