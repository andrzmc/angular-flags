import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableBoxComponent } from './searchable-box.component';

@NgModule({
  declarations: [SearchableBoxComponent],
  imports: [CommonModule],
  exports: [SearchableBoxComponent],
})
export class SearchableBoxModule {}
