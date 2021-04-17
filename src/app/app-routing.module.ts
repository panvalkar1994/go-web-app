import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OffersComponent } from './offers/offers.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'settings', component: AppSearchComponent },
  { path: 'search', component: AppSearchComponent },
  { path: 'bookings', component: BookingDetailsComponent },
  { path: 'cancellations', component: CancellationsComponent },
  { path: 'us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProfileComponent,
  OffersComponent,
  AppSettingsComponent,
  AppSearchComponent,
  BookingDetailsComponent,
  CancellationsComponent,
  AboutUsComponent
]
