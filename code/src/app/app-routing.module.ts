import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTestComponent } from './first-test/first-test.component';
import { ExpressionComponent } from './expression/expression.component';
import { DirectiveAngularComponent } from './directive-angular/directive-angular.component';
import { DirectiveAngularExerciceComponent } from './directive-angular-exercice/directive-angular-exercice.component';
import { TypageComponent } from './typage/typage.component';
import { TypageExerciceComponent } from './typage-exercice/typage-exercice.component';
import { ParentComponent } from './parent/parent.component';
import { InputTextColorComponent } from './shared/components/input-text-color/input-text-color.component';
import { ShoppingParentComponent } from './shared/components/shopping-parent/shopping-parent.component';
import { UserViewComponent } from './shared/components/user-view/user-view.component';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { UserPipeComponent } from './shared/components/user-pipe/user-pipe.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { UserObservableComponent } from './shared/components/user-observable/user-observable.component';
import { DisplaySelectComponent } from './shared/components/user-observable/display-select/display-select.component';
import { UserViewFromServerComponent } from './shared/components/user-view-from-server/user-view-from-server.component';
import { TestWebServiceComponent } from './test-web-service/test-web-service.component';



const routes: Routes = [
  { path: 'first-test', component: FirstTestComponent },
  { path: 'expression', component: ExpressionComponent },
  { path: 'directive-angular', component: DirectiveAngularComponent },
  { path: 'directive-angular-exercice', component: DirectiveAngularExerciceComponent },
  { path: 'typage', component: TypageComponent },
  { path: 'typage-exercice', component: TypageExerciceComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'eloge-de-grandeur', component: InputTextColorComponent },
  { path: 'shopping', component: ShoppingParentComponent },
  { path: 'user', component: UserViewComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'user-pipe', component: UserPipeComponent },
  { path: 'test-observable', component: TestObservableComponent },
  { path: 'test-webservice', component: TestWebServiceComponent },
  { path: 'user-observable', component: UserObservableComponent },
  { path: 'display-user', component: DisplaySelectComponent },
  { path: 'user-view-from-server', component: UserViewFromServerComponent },
  { path: '**', redirectTo: 'first-test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
