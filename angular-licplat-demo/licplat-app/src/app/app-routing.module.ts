import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDispComponent } from './table-disp/table-disp.component';
import { InfoStreamComponent } from './info-stream/info-stream.component';
import { LicplatInfoComponent } from './licplat-info/licplat-info.component';
import { LicplatTrainPublishComponent } from './licplat-train-publish/licplat-train-publish.component';
import { ControlStateComponent } from './control-state/control-state.component';
import { LicplatDashboardComponent } from './licplat-dashboard/licplat-dashboard.component';
import { AboutAppComponent } from './about-app/about-app.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabledisp', pathMatch: 'full' },
  { path: 'tabledisp', component: TableDispComponent },
  { path: 'infostream', component: InfoStreamComponent },
  { path: 'licplatinfo/:id', component: LicplatInfoComponent },
  { path: 'trainlicplat', component: LicplatTrainPublishComponent },
  { path: 'control', component: ControlStateComponent },
  { path: 'dashboard', component: LicplatDashboardComponent },
  { path: 'about', component: AboutAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
