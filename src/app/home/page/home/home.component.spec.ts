import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe("Home Component Spec", () => {

    let homeComponent: HomeComponent;
    let homeFixtureComponent: ComponentFixture<HomeComponent>;
    let homeSpyComponent: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes([]) ],
            declarations: [ HomeComponent ]
        })
    });

    beforeEach(() => {
        homeFixtureComponent = TestBed.createComponent(HomeComponent);
        homeComponent = homeFixtureComponent.componentInstance;
        homeFixtureComponent.detectChanges();
    });

    beforeEach(() => {
        homeSpyComponent = spyOn(homeComponent, "changeDom").and.callThrough();
    })

    it("Should instantiate", () => {
        expect(homeComponent).toBeDefined();
    });

    it("Should be equal to template content no changes", () => {
        let content = homeFixtureComponent.debugElement.nativeElement.querySelector("p").textContent;

        expect(content.includes("straberry")).toBe(false);
    })

    it("Should be equal to template content changed", () => {
        homeComponent.changeDom();
        homeFixtureComponent.detectChanges();
        let content = homeFixtureComponent.debugElement.nativeElement.querySelector("p").textContent;
        
        /** have strawberry in p tag */
        expect(content.includes("straberry")).toBe(true);
        /** check calls with spy */
        expect(homeSpyComponent.calls.count()).toBe(1);
    })

});
