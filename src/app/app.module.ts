import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DoodleComponent } from './pages/doodle/doodle.component';
import { CreateComponent } from './pages/doodle/create/create.component';
import { OptionsComponent } from './pages/doodle/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoodleComponent,
    CreateComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
