import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityLoadingComponent } from './infinity-loading.component';

describe('InfinityLoadingComponent', () => {
  let component: InfinityLoadingComponent;
  let fixture: ComponentFixture<InfinityLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfinityLoadingComponent]
    });
    fixture = TestBed.createComponent(InfinityLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
