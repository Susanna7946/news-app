import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsBordComponent } from "./components/news-board/news-bord.component";

const ROUTES: Routes = [
  {
    path: '',
    component: NewsBordComponent,
    children: [
      {
        path: 'market-news',
        loadChildren: () =>
          import('./modules/market-news/market-news.module').then(
            (m) => m.MarketNewsModule,
          ),
      },
      {
        path: 'symbol-news',
        loadChildren: () =>
          import('./modules/symbol-news/symbol-news.module').then(
            (m) => m.SymbolNewsModule,
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'market-news',
      },
    ]
  },
  {
    path: 'news-article/:slug',
    loadChildren: () =>
      import('./modules/news-article/news-article.module').then(
        (m) => m.NewsArticleModule,
      ),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
