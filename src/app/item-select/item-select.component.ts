import { Component, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.css']
})
export class ItemSelectComponent  implements DoCheck {
  isSelect2Visible: boolean = false;
  //notification
  notificacao:number = 0;
  //barra de compras
  showSidebar: boolean = true; // Inicialmente, a barra lateral está visível
  //Opções
  tipo: any = [];
  select1: any ={};
  select2 : any={};
  cores: any =[];
  estilo:string = "";
  equipamentos = [
    {
      id:0,
      nome:"Geral",
      cor:["Cor"],
    },
    {
      id:1,
      nome:"Tenis",
      cor:["azul","vermelho","Preto"]
    },
    {
      id:2,
      nome:"roupa",
      cor:["Vermelho","Branco","Amarelo"]
    },
    {
      id:3,
      nome:"mochila",
      cor:["Cinza","Marrom","Preto"]
    },
    {
      id:4,
      nome:"Equipamento",
      cor:["Cor"],
    },
  ];

  constructor(private dataService: DataService , private router: Router){}

  ngDoCheck() {
    //Notifcação de produtos
    this.notificacao = this.dataService.Notification;
  }
  ngOnInit(){
    this.select1 = 0;
    this.cores = this.equipamentos.filter((x)=> x.id == this.select1)[0].cor;
    this.select2 = this.cores[0];
    }
  
    onChange(){
      //filtros
      this.cores = this.equipamentos.filter((x)=> x.id == this.select1)[0].cor;
      console.log( this.cores);
      //console.log("ESTOU EXECUTANDO");
      //envio dos dados
      this.dataService.equipamento = this.select1;
      this.dataService.estilo = this.select2;
      if (this.select1 == 0) {
        this.isSelect2Visible = false;
      }else{
        this.isSelect2Visible = true;
      }
    }
  //LOG
    clickButton(){
    if (this.select2 !== "" &&  this.select1 !== 0){
      this.tipo = this.equipamentos.find((x)=>x.id == this.select1)?.nome;
      this.estilo = this.select2;
      }
      else{
        alert("SELECIONE UM TIMPO DE EQUIPAMENTO")
      }
    }
  //Mostra lista de compras
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.dataService.Sidebar = this.showSidebar;
    console.log("TOTAL DE AGORA",this.dataService.Notification);
  }
  ///////////////////ROTAS///////////////////
  navigateToMain() {
    this.router.navigate(['/main/item']);
  }
  navigateToSecond() {
    this.router.navigate(['/second/item']);
  }
  navigateToThird() {
    this.router.navigate(['/third/item']);
  }

}

/*UTILIZAR O SELECT1 PARA FILTRAR POR EQUIPAMENTO
    0->TODOS
    1->Tenis
    2->roupa
    3->mochila
  UTILIZAR SELECT2 PARA FILTRAR POR COR
    -- Variar dependendo do produto

    DADOS QUE SERÂO ENVIADOS

    this.tipo
    this.estilo
    this.select1 - id
  ficar sempre enviado esses dados para o serviço "data.sevice" e na item-list mostrar apenas os que
*/
