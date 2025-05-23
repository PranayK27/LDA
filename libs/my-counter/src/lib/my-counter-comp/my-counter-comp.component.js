import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.action';
let MyCounterComponent = class MyCounterComponent {
    constructor(store) {
        this.store = store;
        this.count$ = store.select('count');
    }
    increment() {
        this.store.dispatch(increment());
    }
    decrement() {
        this.store.dispatch(decrement());
    }
    reset() {
        this.store.dispatch(reset());
    }
};
MyCounterComponent = __decorate([
    Component({
        selector: 'lda-my-counter',
        templateUrl: './my-counter-comp.component.html',
        styleUrls: [],
    }),
    __metadata("design:paramtypes", [Store])
], MyCounterComponent);
export { MyCounterComponent };
//# sourceMappingURL=my-counter-comp.component.js.map