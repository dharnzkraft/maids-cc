import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { UserService } from 'src/app/core/services/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  animations: [
    trigger('itemAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [
        animate('0.8s ease-in-out')
      ])
    ])
  ]
})
export class UserDetailsComponent implements OnInit  {
  id: any;
  responseData: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private headerService: HeaderService
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getSingleUser(this.id).subscribe((response: any) => {
      console.log(response)
      this.responseData = response.data
    })
    this.headerService.toggleMenuVisibility()
  }

  goBack(){
    this.router.navigateByUrl('/')
  }



}
