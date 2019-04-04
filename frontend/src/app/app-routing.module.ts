import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostRecentTestsPageComponent } from './pages/most-recent-tests-page/most-recent-tests-page.component';
import { SampleSearchPageComponent } from './pages/sample-search-page/sample-search-page.component';

const routes: Routes = [
  { path: 'most-recent', component: MostRecentTestsPageComponent },
  { path: 'search', component: SampleSearchPageComponent },
  { path: '**', redirectTo: 'most-recent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
