import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ButtonModule } from "primeng/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
let ExtraModule = class ExtraModule {
};
ExtraModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            MatCardModule,
            MatGridListModule,
            RouterModule,
            MatFormFieldModule,
            MatIconModule,
            FormsModule,
            MatInputModule,
            MatButtonModule,
            ButtonModule,
            MatTableModule,
            MatPaginatorModule,
        ],
    })
], ExtraModule);
export { ExtraModule };
//# sourceMappingURL=extra.module.js.map