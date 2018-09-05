import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';
import { ExchangeForm } from './../exchange-form';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  title = 'xchange';
  model = new ExchangeForm('USD', 'EUR', '0', '0');
  currencyFromMask = {
    prefix: '$ ',
    precision: 4
  };
  currencyToMask = {
    prefix: '€ ',
    precision: 4
  };

  calculate() {
    console.log('calculate');
    this.dataService.getData(this.model.currencyFrom, this.model.currencyTo, this.model.amount).subscribe(data => {
      this.model.result = data;
    });
    return false;
  }


  constructor(private dataService: DataService) {
    console.log('ExchangeComponent');
  }

  ngOnInit() {
  }

}
