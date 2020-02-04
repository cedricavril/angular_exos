import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import { ExpressionComponent } from './expression/expression.component';
import { FormsModule } from '@angular/forms';
import { DirectiveAngularExerciceComponent } from './directive-angular-exercice/directive-angular-exercice.component';
import { TypageExerciceComponent } from './typage-exercice/typage-exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    ExpressionComponent,
    DirectiveAngularExerciceComponent,
    TypageExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
