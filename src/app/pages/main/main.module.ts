import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SearchableBoxModule } from 'src/app/shared/components/layouts/searchable-box/searchable-box.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, SearchableBoxModule],
})
export class MainModule {}
