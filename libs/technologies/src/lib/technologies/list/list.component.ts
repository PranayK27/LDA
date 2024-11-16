import { Observable } from "rxjs";
import { ListApiService } from "../../service/list-api.service";
import { List } from "../model/lists";
import {Component, OnInit, ViewChild} from "@angular/core";
import { Router } from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {sourcesData} from "../../../../../pages/src/lib/data/sources-data";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import HeaderComponent from "../../../../../components/src/header/header.component";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {FooterComponent} from "../../../../../pages/src/lib/shared/footer/footer.component";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
@Component({
  standalone: true,
  selector: 'lda-list',
  imports: [HeaderComponent, FooterComponent, MatPaginator, MatTable, MatHeaderCell, MatColumnDef, MatCell, MatHeaderCellDef, MatHeaderRow, MatRow, MatCellDef, MatRowDef, MatHeaderRowDef],
  template: `
  <lda-storybook-header [user]="user" (onLogout)="redirect()"></lda-storybook-header>
<div class="panel panel-primary">
  <div class="card">
    <div class="card-body">
      <div class="panel-body">
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

          <!--- Note that these columns can be defined in any order.
                The actual rendered columns are set as a property on the row definition" -->

          <!-- Id Column -->
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef> Id </th>
            <td mat-cell *matCellDef="let element"> {{element.id}} </td>
          </ng-container>

          <!-- Name Column -->
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let element"> {{element.name}} </td>
          </ng-container>

          <!-- Description Column -->
          <ng-container matColumnDef="description">
            <th mat-header-cell *matHeaderCellDef> Description </th>
            <td mat-cell *matCellDef="let element">
              <a href="{{ element.description }}"> {{element.description}} </a>
            </td>
          </ng-container>

          <!-- Symbol Column -->
          <ng-container matColumnDef="categoryId">
            <th mat-header-cell *matHeaderCellDef> CategoryId </th>
            <td mat-cell *matCellDef="let element"> {{element.categoryId}} </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="columns"></tr>
          <tr mat-row *matRowDef="let row; columns: columns;"></tr>

          <mat-paginator [pageSizeOptions]="[5, 10, 20]"
                         showFirstLastButtons
                         aria-label="Select page of periodic elements">
          </mat-paginator>

          <ng-container>
            <button></button>
          </ng-container>
        </table>
      </div>
    </div>
  </div>
</div>
<lda-footer></lda-footer>

  `,
  styles: [``],
})
export class ListComponent implements OnInit {

  columns: string[] = ["id", "name", "description", "categoryId"];
  dataSource: any;
  user = {
    name: "Pranay Kekre"
  };
  logout = sourcesData.map(v=> v.login)[0];
  label = 'Logout';
  lists: Observable<List[]> | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(public listApiService: ListApiService,
              private router: Router) {}

  ngOnInit() {
    this.getData();
    this.dataSource = this.lists;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.lists = this.listApiService.getDataList();
  }

  deleteData(id: number | undefined) {
    this.listApiService.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.getData();
        },
        error => console.log(error));
  }

  getDetails(id: number | undefined){
    this.router.navigate(['details', id]);
  }

  redirect(){
    this.router.navigate(['/tech/login']);
  }
}
