import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})
export class ItemDropdownComponent implements OnInit {
pais: any = [];
select1: any ={};
select2 = "Selecione";
cidades: any =[];
cidade="";
paises = [
  {
    id:0,
    nome:"Selecione",
    cidades:["Selecione"],
  },
  {
    id:1,
    nome:"França",
    cidades:["Paris","Marceille","Nica"],
  },
  {
    id:2,
    nome:"Alemanha",
    cidades:["Habug","Berlim","Munique"],
  },
  {
    id:3,
    nome:"Itália",
    cidades:["Roma","Milão","Veneza"],
  },
  {
    id:4,
    nome:"Brasil",
    cidades:["São Paulo","Rio Grande do Sul","Ribeirão Pires"],
  }
];

constructor(){}

  ngOnInit(){
  this.select1 = 0;
  this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
  }

  onChange(){
    this.select2 = "";
    this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
  }

  clickButton(){
    this.pais = this.paises.find((x)=>x.id == this.select1)?.nome;
    this.cidade = this.select2;
  }
}
