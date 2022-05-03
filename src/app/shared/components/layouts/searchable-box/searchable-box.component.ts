import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormModel } from 'src/app/shared/models/forms/basic';
import { FlagsService } from 'src/app/shared/services/flags/flags.service';

@Component({
  selector: 'app-searchable-box',
  templateUrl: './searchable-box.component.html',
  styleUrls: ['./searchable-box.component.scss'],
})
export class SearchableBoxComponent implements OnInit {
  public results: BasicFormModel[] = [];

  constructor(private flags: FlagsService, private router: Router) {}

  ngOnInit(): void {}

  searchByCountryName(value: string) {
    this.flags
      .searchFlagsByCountryName(value)
      .then((results) => (this.results = results));
  }

  redirectToCountry(value: string) {
    this.router.navigate([`/country/${value}`]);
  }
}
