import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EstateComponent } from './estate/estate.component';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FieldProductionComponent } from './field-production/field-production.component';
import { LaborInfoComponent } from './labor-info/labor-info.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FieldDetailsComponent } from './field-details/field-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './_services/user.service';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EstateListComponent } from './estate-list/estate-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CropInformationComponent } from './crop-information/crop-information.component';
import { ImmatureRubberComponent } from './crop-information/immature-rubber/immature-rubber.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatureRubberComponent } from './crop-information/mature-rubber/mature-rubber.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CostInfoComponent } from './cost-info/cost-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProcessInfoComponent } from './cost-info/process-info/process-info.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'

@NgModule({
  declarations: [
    AppComponent,
    CompanyProfileComponent,
    EstateComponent,
    EstateDetailsComponent,
    AddEstateComponent,
    FieldInfoComponent,
    SidenavComponent,
    FieldProductionComponent,
    LaborInfoComponent,
    FieldDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    HomeComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    NavigationComponent,
    CompanyListComponent,
    EstateListComponent,
    CompanyDetailsComponent,
    SpinnerComponent,
    CropInformationComponent,
    ImmatureRubberComponent,
    MatureRubberComponent,
    CostInfoComponent,
    ProcessInfoComponent,
    RedirectComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
    ]),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [DatePipe, UserService, {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
