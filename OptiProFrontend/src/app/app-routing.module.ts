import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {ScheduleComponent} from "./view/schedule/schedule.component";
import {ToolsComponent} from "./view/tools/tools.component";
import {TranslateComponent} from "./view/translate/translate.component";
import {DocsComponent} from "./view/docs/docs.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "schedule", component: ScheduleComponent},
  {path: "tools", component: ToolsComponent},
  {path: "translate", component: TranslateComponent},
  {path: "docs", component: DocsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
