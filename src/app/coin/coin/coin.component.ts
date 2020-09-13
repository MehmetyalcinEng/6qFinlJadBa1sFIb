import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/model/rest.service';
import { Coin } from 'src/app/model/coin';


@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  veri: Coin;
  veriyedek: Coin;
  symbol: Coin;
  constructor(private restserv: RestService) { }


  ngOnInit(): void {

   setInterval(() => {
     this.veriyedek = this.veri;
    this.restserv.getCoin().subscribe(data => {
      this.veri = data;
      console.log(data);
    });
   }, 2000);
   this.guncelle();
  }


  guncelle(){
    this.veriyedek = this.veri;
    this.restserv.getCoin().subscribe(data => {
      this.veri = data;

      
      if(this.veri.bpi.EUR.rate === this.veriyedek.bpi.EUR.rate &&
        this.veri.bpi.GBP.rate === this.veriyedek.bpi.GBP.rate &&
        this.veri.bpi.USD.rate === this.veriyedek.bpi.USD.rate){
          alert("KURLAR ŞUAN GÜNCEL!!!");
        }
      console.log('güncelledim');
    });
  }

}
