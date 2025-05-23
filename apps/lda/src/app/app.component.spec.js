import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from '../../../../libs/components/src/shared/nx-welcome.component';
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, NxWelcomeComponent],
        }).compileComponents();
    });
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it(`should have as title 'lda'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('LDA');
    });
    // it('should render title', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   expect(compiled.querySelector('span')?.textContent).toEqual('LDA');
    // });
});
//# sourceMappingURL=app.component.spec.js.map