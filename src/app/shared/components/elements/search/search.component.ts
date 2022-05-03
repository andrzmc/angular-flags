import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public keyword!: string;
  public data: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectEvent(item: any) {
    console.log('SELECT ============>', item);
    // do something with selected item
  }

  onChangeSearch(value: string) {
    console.log('ON CHANGE SEARCH ============>', value);
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
}
