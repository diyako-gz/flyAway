import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactsPageComponent } from './prodacts-page.component';

describe('ProdactsPageComponent', () => {
  let component: ProdactsPageComponent;
  let fixture: ComponentFixture<ProdactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdactsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
