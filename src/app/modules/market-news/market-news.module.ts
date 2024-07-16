import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { MarketNewsComponent } from "./components/market-news/market-news.component";
import { marketNewsRoutes } from "./market-news-routing.module";


@NgModule({
  declarations: [
    MarketNewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    marketNewsRoutes
  ]
})
export class MarketNewsModule { }
