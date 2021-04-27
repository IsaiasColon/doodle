import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/doodle/create/create.component';
import { DoodleComponent } from './pages/doodle/doodle.component';
import { InitiatorComponent } from './pages/doodle/initiator/initiator.component';
import { OptionsComponent } from './pages/doodle/options/options.component';
import { SettingsComponent } from './pages/doodle/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  {
    path: 'create', component: DoodleComponent,
    children: [
      { path: '', component: CreateComponent },
      { path: 'options', component: OptionsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'initiator', component: InitiatorComponent },
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
