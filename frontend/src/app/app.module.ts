import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgrilyticsCoreModule } from './core/agrilytics-core.module';
import { MostRecentTestsPageComponent } from './pages/most-recent-tests-page/most-recent-tests-page.component';
import { AgrilyticsMaterialModule } from './agrilytics-material.module';
import { SampleSearchPageComponent } from './pages/sample-search-page/sample-search-page.component';
import { SoilTestTableComponent } from './components/soil-test-table/soil-test-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MostRecentTestsPageComponent,
    SampleSearchPageComponent,
    SoilTestTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgrilyticsCoreModule,
    AgrilyticsMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
