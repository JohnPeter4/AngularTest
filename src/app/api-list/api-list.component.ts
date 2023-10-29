import { Component } from '@angular/core';
import {valoresPost,valores} from './Model/respostaModel';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class APIListComponent {
  constructor(public servico:ServerService){}
  val:valores[]=[];
  client:valoresPost={} as valoresPost;
  clientResult: valoresPost={} as valoresPost;
  vItemNome: string ="Claudio";
  vItemJob: string ="Produtor";
  chamadaBack(){
    this.val=[];
    this.clientResult={}as valoresPost;
    //serviço chama o ServerService e assina o serviço e ja 
    this.servico.getTodosUsuarios().subscribe(
        (resposta:any)=>
      {
        console.log(resposta.data);
        this.val = (resposta.data);
        console.log(this.val);
      }) 
    }
  chamadaBackPost(){
    
    this.clientResult={}as valoresPost;
    this.client = {name:this.vItemNome, job:this.vItemJob}
    this.servico.postUsuario(this.client).subscribe(
      (resp:any)=>
      {
        this.clientResult = (resp);
        console.log( this.clientResult);
      }
    )
  }
}
