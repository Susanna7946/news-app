import { RouterModule, Routes } from '@angular/router';
import { NewsArticleComponent } from "./components/news-article/news-article.component";

const routes: Routes = [
  { path: '', component: NewsArticleComponent }
];

export const newsArticleRoutes = RouterModule.forChild(
  routes,
);
