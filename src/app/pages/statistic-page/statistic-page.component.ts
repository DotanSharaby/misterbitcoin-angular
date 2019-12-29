import { Component, OnInit } from '@angular/core';
import { BitCoinService } from '../../services/bitCoin.service'

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  marketPriceChart = {
    type: 'Line',
    columnNames: ['Date', 'Market Price']
  }
  dailyTransChart = {
    type: 'Line',
    columnNames: ['Date', 'Daily Transactions']
  }

  constructor(private bitCoinService: BitCoinService) {}

  ngOnInit() {
    this.loadDailyTransactionData();
    this.loadMarketPriceData();
  }

  loadMarketPriceData() {
    this.bitCoinService.getMarketPrice()
      .subscribe(data => this.formatData(data, this.marketPriceChart))
  }

  loadDailyTransactionData() {
    this.bitCoinService.getConfirmedTransactions()
      .subscribe(data => this.formatData(data, this.dailyTransChart))
  }

  formatData(data, chart) {
    const dataToDisplay = data['values'].map(currData => {
      let d = new Date(currData.x * 1000);
      let date = d.toDateString();
      return [
        date, currData.y
      ]
    })
    chart.data = dataToDisplay
  }


}
