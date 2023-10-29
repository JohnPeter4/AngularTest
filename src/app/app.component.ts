import { Component, OnChanges } from '@angular/core';
import {DataService } from'./data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoDropdownTA';
  currentItem = 'Lasanha de queijo';
  currentnum = 15.99;
  //recebe dados enviados pelo whishilit
  constructor(private dataService: DataService) {}
  data = this.dataService.dataToShare;
  
}
