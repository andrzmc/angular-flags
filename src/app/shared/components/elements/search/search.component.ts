import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicFormModel } from 'src/app/shared/models/forms/basic';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() results!: BasicFormModel[];
  @Output() onSearchWord = new EventEmitter<string>();
  @Output() onSelected = new EventEmitter<string>();

  public keyword!: string;
  public data: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectEvent(value: string) {
    this.onSelected.emit(value);
  }

  onChangeSearch(value: string) {
    this.onSearchWord.emit(value);
  }
}
