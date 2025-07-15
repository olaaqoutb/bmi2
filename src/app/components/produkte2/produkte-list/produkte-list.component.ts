import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
// import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-produkte-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
     CommonModule,
    // HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './produkte-list.component.html',
styleUrls: ['./produkte-list.component.scss'],

})


export class ProdukteListComponent {
  produkte: any[] = [];
  filteredProdukte: any[] = [];
  searchTerm = '';
  showTable = false; // Changed from showInactive to showTable

  displayedColumns: string[] = ['kurzName', 'produktname', 'start', 'ende'];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('produkte.json').subscribe((data) => {
      this.produkte = data;
      // Initially empty until checkbox is checked
      this.filteredProdukte = [];
    });
  }

  filterData() {
    const term = this.searchTerm.toLowerCase();
    // Only filter if table is visible
    if (this.showTable) {
      this.filteredProdukte = this.produkte.filter(p =>
        (p.kurzName || '').toLowerCase().includes(term) ||
        (p.produktname || '').toLowerCase().includes(term)
      );
    } else {
      this.filteredProdukte = [];
    }
  }

  onCheckboxChange() {
    if (this.showTable) {
      // Show all data when checked
      this.filteredProdukte = [...this.produkte];
      this.filterData(); // Apply search filter if any
    } else {
      // Hide table when unchecked
      this.filteredProdukte = [];
    }
  }
clearSearch() {
  this.searchTerm = '';
  this.filterData();
}
  addProduct() {
    alert('Added');
  }
}
