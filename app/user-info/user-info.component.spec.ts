import { UserService } from './user.service';
import { UserInfoComponent } from './user-info.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('UserInfoComponent', () => {

  let comp:    UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let userStub:    any;

  // async beforeEach
  beforeEach(async(() => {
    userStub = {
      user: {
        name: 'TEST'
      }
    };

    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ],
      providers: [
        { provide: UserService, useValue: userStub }
      ]
    })
    .compileComponents(); 
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.user-info'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display a proper user name', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('TEST');
  });
});