import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/doodle/create/create.component';
import { DoodleComponent } from './pages/doodle/doodle.component';
import { OptionsComponent } from './pages/doodle/options/options.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', component: AppComponent,
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'create', component: DoodleComponent,
        children: [
          { path: '', component: CreateComponent },
          { path: 'options', component: OptionsComponent },
        ]
       },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
