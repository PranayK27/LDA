import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MyCounterComponent } from "./my-counter-comp/my-counter-comp.component";
import { counterReducer } from "./counter.reducer";
import { StoreModule } from "@ngrx/store";
let MyCounterModule = class MyCounterModule {
};
MyCounterModule = __decorate([
    NgModule({
        declarations: [MyCounterComponent],
        exports: [MyCounterComponent],
        imports: [
            AsyncPipe,
            StoreModule.forRoot({ count: counterReducer })
        ],
        providers: []
    })
], MyCounterModule);
export { MyCounterModule };
//# sourceMappingURL=my-counter.module.js.map