import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsService } from "../../../../services/news.service";
import { AddStockTickersModalComponent } from "../add-stock-tickers-modal/add-stock-tickers-modal.component";
import type { News } from "../../../../common/models/news.model";
import type { StockTicker } from "../../../../common/models/stock-tickers.model";

@Component({
  selector: 'symbol-news',
  templateUrl: './symbol-news.component.html',
  styleUrls: ['./symbol-news.component.scss']
})
export class SymbolNewsComponent implements OnInit {

  public chosenStockTickers = new Set<StockTicker>();
  public recentSearchTickers: StockTicker[] = [];
  public allStockTickersList: StockTicker[] = [];
  public news: News[] = [];
  public filteredNews: News[] = [];
  public filterValue!: StockTicker | null;
  public initialMode = true;

  constructor(
    private dialog: MatDialog,
    private newsService: NewsService,) {
  }

  ngOnInit() {
    const stockTickers = localStorage.getItem('stockTickers');
    if (stockTickers) {
      this.recentSearchTickers = JSON.parse(stockTickers) as StockTicker[];
    }

    this.newsService.getAllNews().subscribe((news) => {
      this.news = news;
    })

    this.newsService.getStockTickersList().subscribe((stockTickersList) => {
      this.allStockTickersList = stockTickersList;
    })
  }

  public onFilter(value: StockTicker | null) {
    this.filterValue = value;

    if (this.filterValue) {

      const hasSearchTicker = this.recentSearchTickers.find((ticker) => ticker.symbol === this.filterValue?.symbol);

      if(!hasSearchTicker) {
        this.recentSearchTickers.push(this.filterValue);
        localStorage.setItem('stockTickers', JSON.stringify(this.recentSearchTickers.slice(-6)));
      }

      this.newsService.filterByStockTickers(this.filterValue)
        .subscribe((filteredNews) => this.filteredNews = filteredNews);

    } else {
      this.filteredNews = [];
    }
  }

  public onSearch(value: StockTicker) {
    this.initialMode = false;

    this.chosenStockTickers.add(value);
    this.onFilter(value);
  }

  public addStockTickers() {
    this.dialog.open(AddStockTickersModalComponent, {data: this.allStockTickersList})
      .afterClosed().subscribe((stockTickersList: StockTicker[]) => {
        if (stockTickersList) {
          this.initialMode = false;
          stockTickersList.forEach(element => this.chosenStockTickers.add(element));
        }
      })
  }

  public removeStockTicker(item: StockTicker) {
    this.chosenStockTickers.delete(item);
    if(item.symbol === this.filterValue?.symbol) {
      this.filterValue = null;
      this.filteredNews = [];
    }
  }

  public selectItem(isSelected: boolean, item: StockTicker) {
    this.initialMode = false;
    this.onFilter(isSelected ? item : null);
  }
}
