import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../../../services/news.service";
import type { News } from "../../../../common/models/news.model";

@Component({
  selector: 'market-news',
  templateUrl: './market-news.component.html',
  styleUrls: ['./market-news.component.scss']
})
export class MarketNewsComponent implements OnInit {

  public newsList!: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getAllNews().subscribe((news) => {
      this.newsList = news;
    })
  }

}
