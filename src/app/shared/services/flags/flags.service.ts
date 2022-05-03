import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagsApiBaseUrlContant } from '../../constants/http/flags-api';
import { BasicFormModel } from '../../models/forms/basic';
import { sortArrayObjectUtil } from '../../utilities/helpers/tools';

@Injectable({
  providedIn: 'root',
})
export class FlagsService {
  constructor(private http: HttpClient) {}

  searchFlagsByCountryName(value: string): Promise<BasicFormModel[]> {
    return this.http
      .get<any[]>(`${FlagsApiBaseUrlContant}/name/${value}`)
      .toPromise()
      .then((results) => {
        return sortArrayObjectUtil(
          results.map((item: any) => ({
            value: item.cca2,
            label: `${item.name.common} - ${item.name.official}`,
          })),
          'label'
        );
      })
      .catch(() => {
        return [];
      });
  }
}
