import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  user: User | any;
  id: number = 0;
  idNotFound: boolean = false;
  private gueryParamSubscribe: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }


  ngOnInit(): void {

    this.subscribeId(); // get id from query param 
  }
  private subscribeId() {
    this.gueryParamSubscribe = this.route.queryParams.subscribe(params => {
      this.id = parseInt(params['id'], 10);
      this.getUser();
    });
  }
  private getUser() {
    if (!this.id) return;

    this.userService.getUser(this.id)
      .subscribe({
        next: user => { 
          this.user = user ;
          this.idNotFound = false;
        }//this.user = user
        , error: (err) => { 
          if(err.status == 404 )
           this.idNotFound = true;
           this.user = undefined;  }
      }
      );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the queryParams subscription to prevent memory leaks
    if (this.gueryParamSubscribe) {
      this.gueryParamSubscribe.unsubscribe();
    }

  }
}
