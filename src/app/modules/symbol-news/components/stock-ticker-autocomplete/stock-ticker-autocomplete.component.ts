import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import type { StockTicker } from "../../../../common/models/stock-tickers.model";
import type { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
  selector: 'stock-ticker-autocomplete',
  templateUrl: './stock-ticker-autocomplete.component.html',
  styleUrls: ['./stock-ticker-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTickerAutocompleteComponent implements OnInit{

  @Input() allStockTickersList: StockTicker[] = [];
  @Input() recentSearchList: StockTicker[] = [];

  @Output() onChosenStockTicker = new EventEmitter<StockTicker>();

  public stockTickerControl = new FormControl('');
  public filteredOptions: Observable<StockTicker[]> = new Observable<StockTicker[]>();

  ngOnInit() {
    this.filteredOptions = this.stockTickerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): StockTicker[] {
    const filterValue = value.toLowerCase();
    const stockTickersList = value || !this.recentSearchList.length ? this.allStockTickersList : this.recentSearchList;
    return stockTickersList.filter(option => option.symbol.toLowerCase().includes(filterValue));
  }

  public onSelect(value: MatAutocompleteSelectedEvent) {
    this.onChosenStockTicker.emit(value.option.value)
  }

  displayFn(stockTicker: StockTicker): string {
    return stockTicker.symbol;
  }
}
