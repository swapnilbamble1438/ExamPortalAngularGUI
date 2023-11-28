import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authinterceptorProviders } from './service/authinterceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewcategoriesComponent } from './pages/admin/viewcategories/viewcategories.component';
import { AddcategoryComponent } from './pages/admin/addcategory/addcategory.component';
import { ViewquizzesComponent } from './pages/admin/viewquizzes/viewquizzes.component';
import { AddquizComponent } from './pages/admin/addquiz/addquiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdatequizComponent } from './pages/admin/updatequiz/updatequiz.component';
import { ViewquizquestionsComponent } from './pages/admin/viewquizquestions/viewquizquestions.component';
import { AddquestionComponent } from './pages/admin/addquestion/addquestion.component';
import { UpdatequestionComponent } from './pages/admin/updatequestion/updatequestion.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { UserwelcomeComponent } from './pages/user/userwelcome/userwelcome.component';
import { UpdatecategoryComponent } from './pages/admin/updatecategory/updatecategory.component';
import { QuizintroComponent } from './pages/user/quizintro/quizintro.component';
import { QuizstartComponent } from './pages/user/quizstart/quizstart.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NgxUiLoaderModule } from "ngx-ui-loader";

import { NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { LoadresultComponent } from './pages/user/loadresult/loadresult.component';
import { LoadallresultsComponent } from './pages/user/loadallresults/loadallresults.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewcategoriesComponent,
    AddcategoryComponent,
    ViewquizzesComponent,
    AddquizComponent,
    UpdatequizComponent,
    ViewquizquestionsComponent,
    AddquestionComponent,
    UpdatequestionComponent,
    UsersidebarComponent,
    LoadquizComponent,
    UserwelcomeComponent,
    UpdatecategoryComponent,
    QuizintroComponent,
    QuizstartComponent,
    LoadresultComponent,
    LoadallresultsComponent,

    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:false,
    })
 
  ],
  providers: [authinterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
