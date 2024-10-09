import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactPageComponent } from './prodact-page.component';

describe('ProdactPageComponent', () => {
  let component: ProdactPageComponent;
  let fixture: ComponentFixture<ProdactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
