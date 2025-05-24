import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.spinner-overlay'));
    expect(spinner).toBeTruthy();
  });

  it('should hide spinner when isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.spinner-overlay'));
    expect(spinner).toBeFalsy();
  });

  it('should display the custom loading message', () => {
    component.isLoading = true;
    component.message = 'Fetching data...';
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(message.textContent).toContain('Fetching data...');
  });
});
