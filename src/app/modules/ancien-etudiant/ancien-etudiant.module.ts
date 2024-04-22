import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaAncienEtudiantComponent } from './agenda-ancien-etudiant/agenda-ancien-etudiant.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogRefreshMotDePasseComponent } from '../dialog-refresh-mot-de-passe/dialog-refresh-mot-de-passe.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarAncienEtudiantComponent } from './sidebar-ancien-etudiant/sidebar-ancien-etudiant.component';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { DialogAddArticleComponent } from './dialog-add-article/dialog-add-article.component';
import { DialogUpdateArticleComponent } from './dialog-update-article/dialog-update-article.component';
import { AccueilArticleComponent } from './accueil-article/accueil-article.component';




@NgModule({
  declarations: [
    AgendaAncienEtudiantComponent,
    SidebarAncienEtudiantComponent,
    GestionArticleComponent,
    DialogAddArticleComponent,
    DialogUpdateArticleComponent,
    AccueilArticleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatGridListModule,
    MatSortModule,
    MatFormFieldModule,
    MatSnackBarModule,
    
  ]
})
export class AncienEtudiantModule { }
