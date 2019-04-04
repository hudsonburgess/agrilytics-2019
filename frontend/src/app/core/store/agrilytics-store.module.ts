import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SoilTestEffects } from './soil-test/soil-test.effects';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SoilTestEffects,
    ]),
    StoreDevtoolsModule.instrument(),
    // !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AgrilyticsStoreModule { }
