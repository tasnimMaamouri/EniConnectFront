import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgendaAdminComponent } from './modules/admin/agenda-admin/agenda-admin.component';
import { AgendaAncienEtudiantComponent } from './modules/ancien-etudiant/agenda-ancien-etudiant/agenda-ancien-etudiant.component';
import { AgendaNouveauEtudiantComponent } from './modules/nouveau-etudiant/agenda-nouveau-etudiant/agenda-nouveau-etudiant.component';
import { GestionArticleComponent } from './modules/ancien-etudiant/gestion-article/gestion-article.component';
import { AccueilArticleComponent } from './modules/ancien-etudiant/accueil-article/accueil-article.component';

const routes: Routes = [

  { path: "admin/agenda", component: AgendaAdminComponent },

  { path: "nouveauEtudiant/agenda", component: AgendaAncienEtudiantComponent },
  { path: "ancienEtudiant/agenda", component: AgendaAncienEtudiantComponent },
  { path: "nouveauEtudiant/agenda", component: AgendaNouveauEtudiantComponent },
  { path: "ancienEtudiant/accueilArticle", component: AccueilArticleComponent },

  { path: "ancienEtudiant/gestionArticle", component: GestionArticleComponent },

  { path: "header", component: HeaderComponent },
  { path: "login", component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
