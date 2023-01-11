import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsSelectorComponent } from './logs-selector.component';

describe('LogsSelectorComponent', () => {
  let component: LogsSelectorComponent;
  let fixture: ComponentFixture<LogsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
