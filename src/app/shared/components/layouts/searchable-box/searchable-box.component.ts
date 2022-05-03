import { Component, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/shared/services/flags/flags.service';

@Component({
  selector: 'app-searchable-box',
  templateUrl: './searchable-box.component.html',
  styleUrls: ['./searchable-box.component.scss'],
})
export class SearchableBoxComponent implements OnInit {
  constructor(private flags: FlagsService) {}

  ngOnInit(): void {}

  searchByCountryName(value: string) {
    this.flags.searchFlagsByCountryName(value);
  }
}
