import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
// import {EMPTY, of, throwError} from 'rxjs';
// import {CounterTestComponent} from "../counter-test/counter-test.component";

describe('PostsComponent', () => {
    let fixture: ComponentFixture<PostsComponent>;
    let component: PostsComponent;
    let service: PostsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsComponent],
            providers: [PostsService],
            imports: [HttpClientModule]
        });
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        // service = fixture.debugElement.injector.get(PostsService);
        service = TestBed.get(PostsService);
    });
    it('should fetch posts on ngOnInit', () => {
        const posts = [1, 2, 3];
        spyOn(service, 'fetch').and.returnValue(of(posts));
        fixture.detectChanges();
        expect(component.posts).toEqual(posts);
    });

    // beforeEach(() => {
    //     service = new PostsService(null);
    //     component = new PostsComponent(service);
    // });
    // it('should call fetch when ngOnInit', () => {
    //     const spy = spyOn(service, 'fetch').and.callFake(() => {
    //         return EMPTY;
    //     });
    //     component.ngOnInit();
    //     expect(spy).toHaveBeenCalled();
    // });
    // it('should update posts length after ngOnInit', () => {
    //     const posts = [1, 2, 3];
    //     spyOn(service, 'fetch').and.returnValue(of(posts));
    //     component.ngOnInit();
    //     expect(component.posts.length).toBe(posts.length);
    // });
    // it('should add new post', () => {
    //     const post = {title: 'test'};
    //     const spy = spyOn(service, 'create').and.returnValue(of(post));
    //     component.add(post.title);
    //     expect(spy).toHaveBeenCalled();
    //     // expect(component.posts.length).toBe(1);
    //     expect(component.posts.includes(post)).toBeTruthy();
    // });
    // it('should return error message', () => {
    //     const error = 'Error message';
    //     spyOn(service, 'create').and.returnValue(throwError(error));
    //     component.add(('Test title'));
    //     expect(component.message).toBe(error);
    // });
    // it('should remove post if user confirms',  () => {
    //     const spy = spyOn(service, 'remove').and.returnValue((EMPTY));
    //     spyOn(window, 'confirm').and.returnValue(true);
    //
    //     component.delete(10);
    //     expect(spy).toHaveBeenCalledWith(10);
    // });
    // it('should NOT remove post if user does not confirms',  () => {
    //     const spy = spyOn(service, 'remove').and.returnValue((EMPTY));
    //     spyOn(window, 'confirm').and.returnValue(false);
    //
    //     component.delete(10);
    //     expect(spy).not.toHaveBeenCalled();
    // });
});
