import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMatchesComponent } from './tab-matches.component';

describe('TabMatchesComponent', () => {
  let component: TabMatchesComponent;
  let fixture: ComponentFixture<TabMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabMatchesComponent]
    });
    fixture = TestBed.createComponent(TabMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
