import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from "../../../../services/news.service";
import type { News } from "../../../../common/models/news.model";

@Component({
  selector: 'news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  public newsArticle!: News | null;
  constructor(
    private NewsService: NewsService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.params['slug'];
    this.NewsService.getNewsArticle(slug).subscribe({
      next: (newsArticle) => this.newsArticle = newsArticle,
      error: () => this.newsArticle = null
    });
  }
}
