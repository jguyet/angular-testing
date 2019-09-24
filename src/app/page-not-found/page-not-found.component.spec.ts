import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { AuthenticationService } from '../services/AuthenticationService';

describe('PageNotFoundComponent', () => {
  let pageNotFoundComponent: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let authService: jasmine.SpyObj<AuthenticationService>;

  beforeEach(() => {
    // Declaration of testing module and compile components
    TestBed.configureTestingModule({
        imports: [],
        providers: [
            // creation d'un spy et ajout en temps que provider dans le module pour injection dans PageNotFoundComponent
            { provide: AuthenticationService, useValue: jasmine.createSpyObj("AuthenticationService", ["test"]) }
         ],
        declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
    authService = TestBed.get(AuthenticationService);
  });

  beforeEach(() => {
    /** Create PageNotFoundComponent */
    fixture = TestBed.createComponent(PageNotFoundComponent);
    /** Attribute component */
    pageNotFoundComponent = fixture.componentInstance;
    /** Force load UI */
    fixture.detectChanges();

  });

  /** should create component */
  it('should create', () => {
    expect(pageNotFoundComponent)
        .toBeTruthy();// exists
  });

  it('should be first spy',  () => {
    
    //application du spy precedement charger.
    authService.test.and.returnValue(true);
    expect(authService.test()).toBe(true);
    authService.test.and.returnValue(false);
    expect(authService.test()).toBe(false);

    //spyOn => 
    let temp: any = { test: () => false };
    spyOn(temp, 'test').and.returnValue(true);
    expect(temp.test()).toBe(true);

    //Spy target function
    let strawberry = function() { return "beautify"; };
    let spyStrawberry = jasmine.createSpy("blabla", strawberry);

    spyStrawberry.and.returnValue("beautify2");
    expect(spyStrawberry()).toEqual("beautify2");
  })

  /** Test DOM */
  it('should render page name in a h1 tag', () => {
    const domElement = fixture.debugElement.nativeElement;

    expect(domElement.querySelector('h1').textContent)
        .toEqual('page-not-found works!');// equals to
  });

  /** Test Component */
  it('should blabla is > to zero', () => {
    expect(pageNotFoundComponent.blabla > 0)
        .toBe(true);// === true
  });

  /** Test Component */
  it('should blabla is not equal to zero', () => {
      expect(pageNotFoundComponent.blabla != 0)
        .toBe(true);// != 0
  });

});
