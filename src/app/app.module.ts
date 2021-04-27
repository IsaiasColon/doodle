import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DoodleComponent } from './pages/doodle/doodle.component';
import { CreateComponent } from './pages/doodle/create/create.component';
import { OptionsComponent } from './pages/doodle/options/options.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MonthComponent } from './pages/doodle/options/month/month.component';
import { WeekComponent } from './pages/doodle/options/week/week.component';
import { TextComponent } from './pages/doodle/options/text/text.component';
import { SettingsComponent } from './pages/doodle/settings/settings.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { InitiatorComponent } from './pages/doodle/initiator/initiator.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    DoodleComponent,
    CreateComponent,
    OptionsComponent,
    NavbarComponent,
    HomeComponent,
    MonthComponent,
    WeekComponent,
    TextComponent,
    SettingsComponent,
    InitiatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
