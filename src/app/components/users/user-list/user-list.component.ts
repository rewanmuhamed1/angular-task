import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {  MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntl } from 'src/app/services/paginatorIntl.service';
import { CacheService } from 'src/app/services/cache.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [{ provide: MatPaginatorIntl , useClass:PaginatorIntl }],
})
export class UserListComponent implements OnInit {

  users: any = [];
  currentPage = 0;
  



  constructor(private userService: UserService , private cacheService: CacheService ) { }

  ngOnInit(): void {
    // We subscribe to the BehaviorSubject in the cache service to receive data updates.
   this.cacheService.cache$.subscribe(data => {
      this.users = data;
    });

  
   
    this.getUsers();

  }

  getUsers(): void {
    const cachedData = this.cacheService.get((this.currentPage + 1).toString());

// If the data is not in cache, we retrieve it from the server and store it in the cache.
if (!cachedData) {
  this.userService.getUsers(this.currentPage + 1)
  .subscribe(users => {
    try {
      this.cacheService.set((this.currentPage + 1).toString(), users);
    } catch (error) {
      console.error(error);
      // handle the error as you prefer here
    }
  });
}


   
  }
  handlePageEvent(pageEvent: PageEvent) {
  //  console.log('handlePageEvent', pageEvent);
    this.currentPage = pageEvent.pageIndex;
    this.getUsers();
  }
  ngOnDestroy(): void {
    // We unsubscribe from the cache and clear the cache data when the component is destroyed.
   
    this.cacheService.clear((this.currentPage + 1).toString()); // you can adapt this according to your logic to clear the cache
    }
}
 

