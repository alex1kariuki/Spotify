import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'browse', loadChildren: './browse/browse.module#BrowsePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'radio', loadChildren: './radio/radio.module#RadioPageModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
