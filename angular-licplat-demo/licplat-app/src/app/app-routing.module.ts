import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableDispComponent } from "./table-disp/table-disp.component";
import { InfoStreamComponent } from "./info-stream/info-stream.component";
import { LicplatInfoComponent } from "./licplat-info/licplat-info.component";
import { LicplatTrainPublishComponent } from './licplat-train-publish/licplat-train-publish.component';
import { ControlStateComponent } from './control-state/control-state.component'
const routes: Routes = [
  { path: "", redirectTo: "tabledisp", pathMatch: "full" },
  { path: "tabledisp", component: TableDispComponent },
  { path: "infostream", component: InfoStreamComponent },
  { path: "licplatinfo/:id", component: LicplatInfoComponent },
  { path: "trainlicplat", component: LicplatTrainPublishComponent },
  { path: "control", component: ControlStateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
