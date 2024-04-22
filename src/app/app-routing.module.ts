import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNouveauEtudiantComponent } from './page-nouveau-etudiant/page-nouveau-etudiant.component';
import { AgendaAdminComponent } from './modules/admin/agenda-admin/agenda-admin.component';
import { AgendaAncienEtudiantComponent } from './modules/ancien-etudiant/agenda-ancien-etudiant/agenda-ancien-etudiant.component';
import { AgendaNouveauEtudiantComponent } from './modules/nouveau-etudiant/agenda-nouveau-etudiant/agenda-nouveau-etudiant.component';

const routes: Routes = [

  { path: "admin/agenda",component:AgendaAdminComponent},

  { path: "nouveauEtudiant/agenda", component:AgendaAncienEtudiantComponent  },
  { path: "ancienEtudiant/agenda", component:AgendaNouveauEtudiantComponent  },

  { path: "header",component:HeaderComponent},
  {path:"login",component:LoginComponent},
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: "**", component: PageNouveauEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
