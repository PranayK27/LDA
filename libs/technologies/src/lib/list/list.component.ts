import { Observable } from "rxjs";
import { ListApiService } from "../service/list-api.service";
import { List } from "../model/lists";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: 'lda-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  lists: Observable<List[]> | undefined;

  constructor(private listApiService: ListApiService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.lists = this.listApiService.getEmployeesList();
  }

  deleteEmployee(id: number | undefined) {
    this.listApiService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number | undefined){
    this.router.navigate(['details', id]);
  }
}
