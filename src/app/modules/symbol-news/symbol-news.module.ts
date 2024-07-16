import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "../shared/shared.module";
import { SymbolNewsComponent } from "./components/symbol-news/symbol-news.component";
import { AddStockTickersModalComponent } from "./components/add-stock-tickers-modal/add-stock-tickers-modal.component";
import { StockTickerAutocompleteComponent } from "./components/stock-ticker-autocomplete/stock-ticker-autocomplete.component";
import { StockTickerItemComponent } from "./components/stock-ticker-item/stock-ticker-item.component";
import { symbolNewsRoutes } from "./symbol-news-routing.module";


@NgModule({
  declarations: [
    SymbolNewsComponent,
    AddStockTickersModalComponent,
    StockTickerAutocompleteComponent,
    StockTickerItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    symbolNewsRoutes,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class SymbolNewsModule { }
