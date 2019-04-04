import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgrilyticsCoreModule } from './core/agrilytics-core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostRecentTestsPageComponent } from './pages/most-recent-tests-page/most-recent-tests-page.component';
import { AgrilyticsMaterialModule } from './agrilytics-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MostRecentTestsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgrilyticsCoreModule,
    AgrilyticsMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
