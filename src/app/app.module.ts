import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { WidgetModule, treeElements } from 'arranbartish-angular-cli-widgets';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarRouteModule } from './car/car.route';
import { cars } from './car/reducers/car.reducer';
import { CarEffects } from './car/effects/cars';
import { HousingRouteModule } from './housing/housing.route';
import { houses } from './housing/reducers/houses.reducer';
import { HousingEffects } from './housing/effects/housing';
import { PageNotFoundComponent } from './404/pageNotFound.component';
import { AppNavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'car', loadChildren: './car/car.module#CarModule' },
  { path: 'housing', loadChildren: './housing/housing.module#HousingModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AppNavigationComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    ToastyModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    // CarRouteModule,
    // HousingRouteModule,
    WidgetModule,
    StoreModule.forRoot({treeElements}),
    EffectsModule.forRoot([]),
    // TODO
    // StoreModule.provideStore({ cars, houses, treeElements }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
