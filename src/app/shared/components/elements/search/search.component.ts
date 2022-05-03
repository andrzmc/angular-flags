import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearchWord = new EventEmitter<string>();

  public keyword!: string;
  public data: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectEvent(item: any) {
    console.log('SELECT ============>', item);
    // do something with selected item
  }

  onChangeSearch(value: string) {
    this.onSearchWord.emit(value);
  }
}
