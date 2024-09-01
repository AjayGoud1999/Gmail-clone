import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { EmailAppComponent } from './pages/email-app/email-app.component';
import { EmailDetailsComponent } from './pages/email-details/email-details.component';
import { EmailListComponent } from './pages/email-list/email-list.component';
import { EmailResolver } from './services/email.resolver';

const routes: Routes = [
  {
    path:'', component:HomeComponentComponent
  },
  {
    path: 'email', component: EmailAppComponent, children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: 'label/:labelName/:id', component: EmailDetailsComponent,resolve: { email: EmailResolver } },
      { path: 'label/:labelName', component: EmailListComponent },
      { path: ':tab', component: EmailListComponent}, //resolve: { tab: TabResolver } },
      { path: ':tab/:id', component: EmailDetailsComponent, resolve: { email: EmailResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
