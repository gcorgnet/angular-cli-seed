import { CarRouteModule } from './car.route';
import { CarEffects } from './effects/cars';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetModule } from 'arranbartish-angular-cli-widgets';

import { AddComponent } from './components/add/add.component';
import { CarListComponent } from './components/list/car-list.component';
import { ListingComponent } from './containers/listing/listing.component';
import { SearchResultComponent } from './containers/search-result/search-result.component';
import { CarsLazyMenuGuard } from './guards/car-lazy-menu';
import { CarsListedGuard } from './guards/car-listing';
import { CarService } from './service/car.service';
import { UtilitiesModule } from '../utilities/utilities.module';

@NgModule({
  imports: [
    CommonModule,
    CarRouteModule,
    WidgetModule,
    UtilitiesModule,
    // TODO
    // EffectsModule.run(CarEffects),
  ],
  exports: [
    CarListComponent,
    ListingComponent,
    SearchResultComponent
  ],
  declarations: [
    CarListComponent,
    ListingComponent,
    SearchResultComponent,
    AddComponent],
  providers: [
    CarService,
    CarsListedGuard,
    CarsLazyMenuGuard
  ]
})
export class CarModule { }
