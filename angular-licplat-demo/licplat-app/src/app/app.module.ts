// tslint:disable: quotemark
import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { MatSliderModule } from "@angular/material/slider";
// import { MatButtonModule } from "@angular/material/button";
// import { MatTableModule } from "@angular/material/table";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatCheckboxModule } from "@angular/material/checkbox";
// import { MatSnackBarModule } from "@angular/material/snack-bar";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
// import { MatPaginatorModule } from "@angular/material/paginator";
// import { MatSortModule } from "@angular/material/sort";
// import { MatMenuModule } from "@angular/material/menu";
// import { MatIconModule } from "@angular/material/icon";
// import { MatListModule } from "@angular/material/list";
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material';

import {
  MatSliderModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableDispComponent } from "./table-disp/table-disp.component";
import { InfoStreamComponent } from "./info-stream/info-stream.component";
import { LicplatInfoComponent } from "./licplat-info/licplat-info.component";
import { LicplatTrainPublishComponent } from './licplat-train-publish/licplat-train-publish.component';
import { ControlStateComponent } from './control-state/control-state.component';
import { LicplatDashboardComponent } from './licplat-dashboard/licplat-dashboard.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    TableDispComponent,
    InfoStreamComponent,
    LicplatInfoComponent,
    LicplatTrainPublishComponent,
    ControlStateComponent,
    LicplatDashboardComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GraphQLModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [Title, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
