import { RouterModule, Routes } from '@angular/router';
import { MarketNewsComponent } from "./components/market-news/market-news.component";

const routes: Routes = [
  { path: '', component: MarketNewsComponent }
];

export const marketNewsRoutes = RouterModule.forChild(
  routes,
);
