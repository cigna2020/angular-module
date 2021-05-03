import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import {Observable, Subject} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

class RouterStub {
  navigate(path: string[]) {};
}

class ActivatedRouteStub {
  // params: Observable<Params>;
  private subject = new Subject();
  push(params: Params) {
    this.subject.next(params);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
        {provide: Router, useClass: RouterStub}, // заменяем класс по умолчанию, необходимо для интегр.тестирования
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to posts if goBack', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/posts']);
  });
  it('should navigate to 404 if if = 0',  () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);

    route.push({id: '0'});
    expect(spy).toHaveBeenCalledWith(['/404']);
  });
});
