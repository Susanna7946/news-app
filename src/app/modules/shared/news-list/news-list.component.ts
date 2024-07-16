import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from "../../../common/models/news.model";

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {
  @Input() newsList: News[] = [];
}
