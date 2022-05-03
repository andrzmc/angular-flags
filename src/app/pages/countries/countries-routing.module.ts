import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AL',
    pathMatch: 'full',
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./country/country.module').then((m) => m.CountryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
