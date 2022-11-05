import { Observable } from "rxjs";
import { ListApiService } from "../../service/list-api.service";
import { List } from "../model/lists";
import {Component, OnInit, ViewChild} from "@angular/core";
import { Router } from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
@Component({
  selector: 'lda-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  columns: string[] = ["id", "name", "description", "categoryId"];

  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  lists: Observable<List[]> | undefined;

  constructor(private listApiService: ListApiService,
              private router: Router) {}

  ngOnInit() {
    this.getData();
    this.dataSource = this.lists;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.lists = this.listApiService.getEmployeesList();
  }

  deleteEmployee(id: number | undefined) {
    this.listApiService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.getData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number | undefined){
    this.router.navigate(['details', id]);
  }
}
