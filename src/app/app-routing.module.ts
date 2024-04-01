import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'userdetail/:id', component: UserDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
