import { ListApiService } from "../../service/list-api.service";
import {Component, OnInit, ViewChild} from "@angular/core";
import { Router } from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
import { ComponentsModule } from "@lda/taskbox";
import { PagesModule } from "@lda/pages";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {FooterComponent} from "@lda/pages";
const listImports= [ComponentsModule, PagesModule, MatPaginator, MatTable, MatHeaderCell, MatColumnDef, MatCell, MatHeaderCellDef, MatHeaderRow, MatRow, MatCellDef, MatRowDef, MatHeaderRowDef];
@Component({
  standalone: true,
  selector: 'lda-list',
  imports: [listImports, FooterComponent],
  template: `
    <lda-storybook-header [user]="user" (redirect)="redirect()" (onLogout)="redirect()"></lda-storybook-header>
    <div class="panel panel-primary">
      <div class="card">
        <div class="card-body">
          <div class="panel-body">
            <lda-storybook-button [label]="'home'" (onClick)="redirect()"></lda-storybook-button>
            <table mat-table [dataSource]="lists" class="mat-elevation-z8">

              <!--- Note that these columns can be defined in any order.
                    The actual rendered columns are set as a property on the row definition" -->

              <!-- Name Column -->
              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef> Name</th>
                <td mat-cell *matCellDef="let element"> {{ element.name }}</td>
              </ng-container>

              <!-- Id Column -->
              <ng-container matColumnDef="id">
                <th mat-header-cell *matHeaderCellDef> Id</th>
                <td mat-cell *matCellDef="let element"> {{ element.id }}</td>
              </ng-container>

              <!-- Description Column -->
              <ng-container matColumnDef="description">
                <th mat-header-cell *matHeaderCellDef> Description</th>
                <td mat-cell *matCellDef="let element">
                  <a href="{{ element.description }}"> {{ element.description }} </a>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="columns"></tr>
              <tr mat-row *matRowDef="let row; columns: columns;"></tr>

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

  columns: string[] = ["id", "name", "description"];
  user = {
    name: "User"
  };
  lists: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(public listApiService: ListApiService,
              private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  async getData() {
    this.lists = await this.listApiService.getDataList();
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
    this.router.navigate(['/tech']);
  }
}
