import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableBoxComponent } from './searchable-box.component';
import { SearchModule } from '../../elements/search/search.module';

@NgModule({
  declarations: [SearchableBoxComponent],
  imports: [CommonModule, SearchModule],
  exports: [SearchableBoxComponent],
})
export class SearchableBoxModule {}
