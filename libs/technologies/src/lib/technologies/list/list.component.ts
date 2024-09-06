import { Observable } from "rxjs";
import { ListApiService } from "../../service/list-api.service";
import { List } from "../model/lists";
import {Component, OnInit, ViewChild} from "@angular/core";
import { Router } from '@angular/router';
import {MatPaginator} from "@angular/material/paginator";
import {sourcesData} from "../../../../../pages/src/lib/data/sources-data";
@Component({
  selector: 'lda-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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
