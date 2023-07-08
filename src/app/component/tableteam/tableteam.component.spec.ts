import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableteamComponent } from './tableteam.component';

describe('TableteamComponent', () => {
  let component: TableteamComponent;
  let fixture: ComponentFixture<TableteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableteamComponent]
    });
    fixture = TestBed.createComponent(TableteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
