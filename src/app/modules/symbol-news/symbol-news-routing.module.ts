import { RouterModule, Routes } from '@angular/router';
import { SymbolNewsComponent } from "./components/symbol-news/symbol-news.component";

const routes: Routes = [
  { path: '', component: SymbolNewsComponent }
];

export const symbolNewsRoutes = RouterModule.forChild(
  routes,
);
