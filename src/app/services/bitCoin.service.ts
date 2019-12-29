import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RATE_API = 'https://blockchain.info/tobtc?currency=USD&value=1'
const MARKET_PRICE_API = 'https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true'
const DAILY_TRANS_API = 'https://api.blockchain.info/charts/n-transactions?&timestamp=2months&format=json&cors=true'
@Injectable()
export class BitCoinService {
    constructor(private http: HttpClient) { }
    getRate() {
        return this.http.get(RATE_API);
    }

    getMarketPrice() {
        return this.http.get(MARKET_PRICE_API);
    }

    getConfirmedTransactions() {
        return this.http.get(DAILY_TRANS_API);
    }

}