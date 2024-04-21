import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogRefreshMotDePasseComponent } from './modules/dialog-refresh-mot-de-passe/dialog-refresh-mot-de-passe.component';
import { DialogUpdatePassUtilisateurComponent } from './modules/dialog-update-pass-utilisateur/dialog-update-pass-utilisateur.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import {  MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarAdminComponent } from './modules/admin/sidebar-admin/sidebar-admin.component';
import { AgendaAdminComponent } from './modules/admin/agenda-admin/agenda-admin.component';
import { AgendaAncienEtudiantComponent } from './modules/ancien-etudiant/agenda-ancien-etudiant/agenda-ancien-etudiant.component';
import { SidebarAncienEtudiantComponent } from './modules/ancien-etudiant/sidebar-ancien-etudiant/sidebar-ancien-etudiant.component';
import { AgendaNouveauEtudiantComponent } from './modules/nouveau-etudiant/agenda-nouveau-etudiant/agenda-nouveau-etudiant.component';
import { SidebarNouveauEtudiantComponent } from './modules/nouveau-etudiant/sidebar-nouveau-etudiant/sidebar-nouveau-etudiant.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SnackBarComponent,
    NavbarComponent,
    DialogRefreshMotDePasseComponent,
    DialogUpdatePassUtilisateurComponent,
    AgendaAdminComponent,
    SidebarAdminComponent,
    AgendaAncienEtudiantComponent,
    SidebarAncienEtudiantComponent,
    AgendaNouveauEtudiantComponent,
    SidebarNouveauEtudiantComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    ButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
