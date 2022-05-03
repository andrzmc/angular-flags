export interface CountryModel {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: string;
  currencies: any;
  fifa: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  independent: boolean;
  landlocked: boolean;
  languages: any;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    official: string;
  };
}
