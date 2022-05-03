import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, AutocompleteLibModule],
  exports: [SearchComponent],
})
export class SearchModule {}
