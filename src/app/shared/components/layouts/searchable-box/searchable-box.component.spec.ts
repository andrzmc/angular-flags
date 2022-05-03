import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableBoxComponent } from './searchable-box.component';

describe('SearchableBoxComponent', () => {
  let component: SearchableBoxComponent;
  let fixture: ComponentFixture<SearchableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchableBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
