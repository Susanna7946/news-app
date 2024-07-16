import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import newsData from "../common/constants/news.constant";
import allStockTickersList from "../common/constants/stock-ticker.constant";
import type { News } from "../common/models/news.model";
import type { StockTicker } from "../common/models/stock-tickers.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public getAllNews(): Observable<News[]> {
    return of(newsData);
  }

  public getStockTickersList(): Observable<StockTicker[]> {
    return of(allStockTickersList);
  }

  public filterByStockTickers(filterValue: StockTicker) {
    const filteredNews = newsData.filter(elem =>
      elem.tickers.find(ticker => ticker === filterValue?.symbol)
    )

    return of(filteredNews);
  }

  public getNewsArticle(slug: string): Observable<News> {
    const news = newsData.find((news) => news.slug === slug)

    if(!news) {
      return throwError(() => {
        return new Error('Something went wrong');
      });
    }

    return of(news);
  }
}
