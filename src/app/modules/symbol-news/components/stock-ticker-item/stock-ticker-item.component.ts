import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'stock-ticker-item',
  templateUrl: './stock-ticker-item.component.html',
  styleUrls: ['./stock-ticker-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTickerItemComponent {

  @Input() name = '';
  @Input() isSelected = false;
  @Output() remove =  new EventEmitter();
  @Output() selectItem = new EventEmitter<boolean>();
}
