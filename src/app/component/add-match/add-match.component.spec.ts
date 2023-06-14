import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatchComponent } from './add-match.component';

describe('AddMatchComponent', () => {
  let component: AddmatchComponent;
  let fixture: ComponentFixture<AddmatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmatchComponent]
    });
    fixture = TestBed.createComponent(AddmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
