import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticleComponent } from "./components/news-article/news-article.component";
import { newsArticleRoutes } from "./news-article-routing.module";


@NgModule({
  declarations: [
    NewsArticleComponent
  ],
  imports: [
    CommonModule,
    newsArticleRoutes
  ]
})
export class NewsArticleModule { }
