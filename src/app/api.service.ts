import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient){

  }
  public postUsuario (user:any) :Observable<any>{ // Insere um tipo de variavel na API
      const url= 'https://reqres.in/api/users';
      return this.http.post<any>(url,user);
  }
  public getTodosUsuarios():Observable<any>{ // Faz o request da API
      const url = 'https://reqres.in/api/users'; 
      return this.http.get<any>(url);
  }
}
