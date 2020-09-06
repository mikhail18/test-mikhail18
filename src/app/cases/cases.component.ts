import { Component, OnInit } from '@angular/core';
import { CasesDataService } from '../cases-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: any;
  selectedCase: any;
  tableHeaders: string[];
  tableData: Array<any> = [];


  constructor(
    private casesDataService: CasesDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cases = this.casesDataService.getCases();
 
    this.tableHeaders = [
      'Case ID', 'Case Number', 'Case Name', 'Case Category ID', 'Item Count', 'Score',
      'Assigned On', 'Work Flow Position ID', 'Created On', 'Created By User ID', 'Follow Up Flag',
      'SAR Type ID', 'Item Amount', 'Configuration Name', 'Client Case Label 1', 'Client Case Label 2',
      'Client Case Label 3', 'Client Case Label 4', 'Client Case Label 6', 'Case View Tab Group ID',
      'Case Type ID', 'Linked Case ID', 'Is Locked'
    ];
  }
  toDate(val: string): Date {
    return new Date(val.replace('T', ' '));
  }

  openDetails(idNum: number): void {
    const id = idNum.toString();
  }
}
