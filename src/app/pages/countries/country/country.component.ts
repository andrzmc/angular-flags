import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryModel } from 'src/app/shared/models/flags/country';
import { FlagsService } from 'src/app/shared/services/flags/flags.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  public id!: string;
  public country!: CountryModel | null;

  constructor(private route: ActivatedRoute, private flag: FlagsService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.flag.getCountryInformationById(this.id).then((result) => {
      this.country = result;
    });
  }
}
