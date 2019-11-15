// tslint:disable: quotemark

import { Component, OnInit, ViewChild } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
// import { SomeService, LicencePlate } from "./data.service";

import { LicencePlate } from "../licplat";
import { LICPLAT_DATA } from "../mock-licplats";
// import { LicplatService } from "../licplat.service";

@Component({
  selector: "app-table-disp",
  templateUrl: "./table-disp.component.html",
  styleUrls: ["./table-disp.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("325ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})

/* export class Group {
  level = 0;
  parent: Group;
  expanded = true;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
} */
export class TableDispComponent implements OnInit {
  title = "Table Display";

  // licplats: LicencePlate[];
  selectedLicPlat: LicencePlate;

  /* Ignore - Testing */
  /*licplat: LicPlat = {
    id: 1,
    prediction: "MANDELAGP",
    value: 0.87,
    cameraId: "CAM_SAIC_02_23",
    timestamp: "11-11-2019::07:51"
  };*/

  dataSource = new MatTableDataSource(LICPLAT_DATA);
  // dataSource = new MatTableDataSource<LicencePlate>([]);
  headerToDisplay = [
    "Prediction",
    "Value",
    "Last Seen - Date",
    "Last Seen - Location"
  ];
  // columnsToDisplay: string[] = ["prediction", "value", "timestamp", "location"];
  columnsToDisplay: string[] = ["prediction", "value"];
  expandedElement: LicencePlate | null;

  /* _alldata: any[];
  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];*/

  constructor(
    private snackBar: MatSnackBar,
    // private licplatService: LicplatService
  ) {
    // this.groupByColumns = ["last_seen_date"];
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.getLicPlats();

    /* this.dataSourceService.getAllData()
    .subscribe(
      (data: any) => {
          data.data.forEach((item, index) => {
            item.id = index + 1;
          });
          this._alldata = data.data;
          this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
          this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
          this.dataSource.filter = performance.now().toString();
        },
      (err: any) => console.log(err)
    ); */
  }

  onSelect(licplat: LicencePlate): void {
    this.selectedLicPlat = licplat;
  }

  /* getLicPlats(): void {
    this.licplats = this.licplatService.getLicPlats();
  } */
}
