import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import { ExpressionComponent } from './expression/expression.component';
import { DirectiveAngularComponent } from './directive-angular/directive-angular.component';
import { DirectiveAngularExerciceComponent } from './directive-angular-exercice/directive-angular-exercice.component';
import { TypageComponent } from './typage/typage.component';
import { TypageExerciceComponent } from './typage-exercice/typage-exercice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { InputTextColorComponent } from './shared/components/input-text-color/input-text-color.component';
import { ShoppingParentComponent } from './shared/components/shopping-parent/shopping-parent.component';
import { ShoppingFilsComponent } from './shared/components/shopping-fils/shopping-fils.component';
import { UserViewComponent } from './shared/components/user-view/user-view.component';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { UserRowComponent } from './shared/components/user-row/user-row.component';
import { UserPipeComponent } from './shared/components/user-pipe/user-pipe.component';
import { FilterByAgePipe } from './shared/pipes/filter-by-age.pipe';
import { TestSharedService } from './shared/services/test-shared.service';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { CallObservableComponent } from './test-observable/call-observable/call-observable.component';
import { SetObservableComponent } from './test-observable/set-observable/set-observable.component';
import { UserObservableComponent } from './shared/components/user-observable/user-observable.component';
import { NavBarService } from './shared/services/nav-bar.service';
import { UserCallObservableComponent } from './shared/components/user-observable/user-call-observable/user-call-observable.component';
import { UserSetObservableComponent } from './shared/components/user-observable/user-set-observable/user-set-observable.component';
import { DisplaySelectComponent } from './shared/components/user-observable/display-select/display-select.component';
import { UserViewFromServerComponent } from './shared/components/user-view-from-server/user-view-from-server.component';
import { TestWebServiceComponent } from './test-web-service/test-web-service.component';
import { UserWebService } from './shared/webservices/user.webservice';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    ExpressionComponent,
    DirectiveAngularComponent,
    DirectiveAngularExerciceComponent,
    TypageComponent,
    TypageExerciceComponent,
    ParentComponent,
    ChildComponent,
    InputTextColorComponent,
    ShoppingParentComponent,
    ShoppingFilsComponent,
    UserViewComponent,
    UserTableComponent,
    UserRowComponent,
    UserPipeComponent,
    FilterByAgePipe,
    UserDetailsComponent,
    TestObservableComponent,
    CallObservableComponent,
    SetObservableComponent,
    UserObservableComponent,
    DisplaySelectComponent,
    UserViewFromServerComponent,
    TestWebServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TestSharedService,
    NavBarService,
    UserWebService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
