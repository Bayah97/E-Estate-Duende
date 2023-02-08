import { ContentChildren, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { EstateComponent } from './estate/estate.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { FieldProductionComponent } from './field-production/field-production.component';
import { LaborInfoComponent } from './labor-info/labor-info.component';
import { FieldDetailsComponent } from './field-details/field-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CropInformationComponent } from './crop-information/crop-information.component';
import { CostInfoComponent } from './cost-info/cost-info.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const routes: Routes = 
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent},
    ],
  },
  { path: 'redirect', component:RedirectComponent, canActivate:[AuthGuard]},
  { path: 'auth-callback', component:AuthCallbackComponent},
  {path:'register', component:RegisterComponent},
  {path: 'e-estate', component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk', 'Estate Clerk']} },
      { path:'company-profile', component:CompanyProfileComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk']}},      
      { path:'company-profile/:id', component:CompanyDetailsComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk']}},      
      { path:'estate', component:EstateComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk']}},
      { path:'add-estate', component:AddEstateComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk']}},
      { path:'estate/:id', component:EstateDetailsComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Company Clerk']}},
      { path:'field-info', component:FieldInfoComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin','Estate Clerk','Company Clerk']}},
      { path:'fieldsinfo/:id', component:FieldDetailsComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Estate Clerk']}},
      { path:'field-production', component:FieldProductionComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Estate Clerk']}},
      { path:'labor-info', component:LaborInfoComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Estate Clerk']}},
      { path:'company-list', component:CompanyListComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin']}},
      { path:'estate-list', component:EstateListComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin']}},
      { path:'crop-info', component:CropInformationComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Estate Clerk']}},
      { path:'cost-info', component:CostInfoComponent, canActivate:[AuthGuard], data:{permittedRoles:['Admin', 'Estate Clerk']}},
      { path:'forbidden', component:ForbiddenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
