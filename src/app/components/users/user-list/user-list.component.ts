import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntl } from 'src/app/services/paginatorIntl.service';
import { CacheService } from 'src/app/services/cache.service';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../../store/user.actions';
import { Observable } from 'rxjs';
import { selectLoading } from '../../../store/user.selectors';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class UserListComponent implements OnInit {

  users: any = [];
  currentPage = 0;
  totalPage = 0;
  per_page = 0;
  loading$: Observable<boolean> | undefined;


  constructor(private userService: UserService, private cacheService: CacheService, private store: Store<any>) { }
 
    ngOnInit(): void {
     
      // We subscribe to the BehaviorSubject in the cache service to receive data updates.
    
      this.loading$ = this.store.pipe(select(selectLoading));
      console.log('ngOnInit this.getUsers()');
      this.getUsers();
     
    }

    getUsers(): void {
      
        this.store.dispatch(UserActions.LoadUsers({ page: this.currentPage + 1 }));
        console.log('dispatch this.getUsers()');
        // Subscribe to the store and update users and cache
        this.store.subscribe(state => {
          this.users = state.users.allData.data;
          this.totalPage = state.users.allData.total;
          this.per_page = state.users.allData.per_page;
       
        });
      
    }

  handlePageEvent(pageEvent: PageEvent) {
    //  console.log('handlePageEvent', pageEvent);
    this.currentPage = pageEvent.pageIndex;
    this.getUsers();
  }


}
