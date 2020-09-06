import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasesDataService } from '../cases-data.service';
import { Case } from '../case';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  id: number;
  case: Case;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private casesDataService: CasesDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.casesDataService.casesMsg.subscribe(message => {
        /* this solution will kep latest data
          specialy if data will be updated for other resource
          Also will prevent if user wil use URL diretory in Browser with any Case 1D
          Try to refresh browser and see what happened */
        if (message) {
          const cases = message;
          this.case = cases.filter(x => x.CaseID === this.id);
        } else {
          this.router.navigate(['/cases']);
        }
      });
    });
  }
}
