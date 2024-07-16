import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from "./news-list/news-list.component";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsListComponent]
})
export class SharedModule { }
