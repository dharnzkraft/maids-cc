import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTerm: string = '';
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  isMenuVisible = true;

  constructor(private headerService: HeaderService){
    this.headerService.menuVisibility$.subscribe((isVisible) => {
      this.isMenuVisible = isVisible;
    });
  }


  onSearchChange(): void {
    this.searchChange.emit(this.searchTerm); // Emit the search term

  }

  toggleMenu() {
    this.headerService.toggleMenuVisibility();
  }



}
