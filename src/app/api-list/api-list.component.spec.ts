import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIListComponent } from './api-list.component';

describe('APIListComponent', () => {
  let component: APIListComponent;
  let fixture: ComponentFixture<APIListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIListComponent]
    });
    fixture = TestBed.createComponent(APIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
