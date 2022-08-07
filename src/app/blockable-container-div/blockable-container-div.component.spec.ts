import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockableContainerDivComponent } from './blockable-container-div.component';

describe('BlockableContainerDivComponent', () => {
  let component: BlockableContainerDivComponent;
  let fixture: ComponentFixture<BlockableContainerDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockableContainerDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockableContainerDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
