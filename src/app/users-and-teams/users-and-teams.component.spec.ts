import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAndTeamsComponent } from './users-and-teams.component';

describe('UsersAndTeamsComponent', () => {
  let component: UsersAndTeamsComponent;
  let fixture: ComponentFixture<UsersAndTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAndTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAndTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
