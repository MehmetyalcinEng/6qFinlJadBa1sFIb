import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinComponent } from './coin/coin/coin.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CoinComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
