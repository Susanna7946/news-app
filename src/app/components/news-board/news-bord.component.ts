import { Component } from '@angular/core';

@Component({
  selector: 'news-board',
  templateUrl: './news-bord.component.html',
  styleUrls: ['./news-bord.component.scss']
})
export class NewsBordComponent {

  public readonly tabs = [
    {
      url: '../market-news',
      title: 'Market news',
    },
    {
      url: '../symbol-news',
      title: 'Symbol news',
    },
  ] as const;

}
