import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import type { StockTicker } from "../../../../common/models/stock-tickers.model";

@Component({
  selector: 'add-stock-tickers-modal',
  templateUrl: './add-stock-tickers-modal.component.html',
  styleUrls: ['./add-stock-tickers-modal.component.scss']
})
export class AddStockTickersModalComponent {

  public chosenStockTickersList = new Set<StockTicker>;
  public allStockTickers!: StockTicker[];
  constructor(
    @Inject(MAT_DIALOG_DATA) data: StockTicker[],
    private dialogRef: MatDialogRef<AddStockTickersModalComponent>,
  ) {
    this.allStockTickers = data;
  }

  public addStockTicker(value: StockTicker) {
    this.chosenStockTickersList.add(value);
  }

  public removeStockTicker(value: StockTicker) {
    this.chosenStockTickersList.delete(value);
  }

  public close(event: Event, add?: boolean) {
    event.stopPropagation();
    event.preventDefault();
    this.dialogRef.close(add && this.chosenStockTickersList);
  }
}

