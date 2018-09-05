import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';

import { DataService } from './data.service';

import { CurrencyMaskModule } from "ng2-currency-mask";

const routes: Route[] = [
  {path: '', component: ExchangeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
