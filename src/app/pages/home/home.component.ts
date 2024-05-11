import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/core/models/userResponse.model';
import { UserService } from 'src/app/core/services/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeaderService } from 'src/app/core/services/header.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('itemAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [
        animate('0.8s ease-in-out')
      ])
    ])
  ]
})

export class HomeComponent {

  
  
  users: any;
  filteredData: any[] = [];
  searchTerm: any;
  // pagination 
  currentPage = 1;
  itemsPerPage = 6;
  totalItems = 0;
  totalPages = 0;

  constructor( 
    private userService: UserService,
    private router: Router,
    private headerService: HeaderService
    ){
      this.headerService.toggleMenuVisibility()
    this.loadData(this.currentPage)
  }

  loadData(page: number) {
    const cachedData = localStorage.getItem('cachedData');
    
    if(cachedData){
      const userCache = JSON.parse(cachedData)
      this.users = userCache.data;
        this.totalItems = userCache.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        if(this.users.length){
          this.filterData(this.searchTerm)
        }
    } else {
      this.userService.getUsers(page).subscribe((response: any) => {
        this.users = response.data;
        this.totalItems = response.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        localStorage.setItem('cachedData', JSON.stringify(response))
        if(this.users.length){
          this.filterData(this.searchTerm)
        }
      });
    }
    
  }

  onPageChange(event: any) {
    console.log(event)
    this.currentPage = event.pageIndex + 1

    console.log(this.currentPage, 'current page')
    this.loadData(this.currentPage );
  }

  viewUser(id: number){
    this.router.navigate(['/details', id]);
  }

  filterData(searchTerm: any): void {
    // console.log(searchTerm)
    if (!searchTerm || !searchTerm.trim()) {
      this.filteredData = this.users; // Show all data if search term is empty
      return;
    }

    const searchTermNum = parseInt(searchTerm);

    this.filteredData = this.users.filter((item: { id: number; }) => {
      // Customize this condition based on your data structure and search criteria
      return item.id === searchTermNum ;
    });
  }
}