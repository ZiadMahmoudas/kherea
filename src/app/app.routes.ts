import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GovernanceComponent } from './governance/governance.component';
import { MangementComponent } from './mangement/mangement.component';
import { CenterComponent } from './center/center.component';
import { StoreComponent } from './store/store.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Government",component:GovernanceComponent},
  {path:"Mange",component:MangementComponent},
  {path:"Center",component:CenterComponent},
  {path:"Store",component:StoreComponent},
  {path:"Services",component:ServicesComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Clinics",component:ClinicsComponent},
  {path:"**",component:NotFoundComponent},

];

