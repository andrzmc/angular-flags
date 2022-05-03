import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagsApiBaseUrlContant } from '../../constants/http/flags-api';

@Injectable({
  providedIn: 'root',
})
export class FlagsService {
  constructor(private http: HttpClient) {}

  searchFlagsByCountryName(value: string) {
    return this.http
      .get(`${FlagsApiBaseUrlContant}/name/${value}`)
      .toPromise()
      .then((results) => console.log(results));
  }
}
