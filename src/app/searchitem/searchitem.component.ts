import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyservicesService } from '../services/applyservices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.scss']
})
export class SearchitemComponent implements OnInit, OnDestroy {

  showdata: any[] = [];       // ✅ filtered results yahan store honge
  loading: boolean = false;
  searchTerm: string = '';
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alldata: ApplyservicesService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['data'];
      console.log('Search term:', search);
      if (search) {
        this.searchTerm = search;
        this.searchitem(search);   
      }
    });
  }

  searchitem(search: string) {
    this.loading = true;
    const searchstr = search.toLocaleLowerCase();

    this.sub = this.alldata.filterdata().subscribe({
      next: (value: any[]) => {
        console.log('All data:', value);

        this.showdata = value.filter(item => {
          const namematch = item.name?.toLocaleLowerCase().includes(searchstr);

          return namematch;
        });

        console.log('Filtered results:', this.showdata);
        this.loading = false;
      },
      error: (err) => {
        console.log('Error:', err);
        this.loading = false;
      }
    });
  }

  onbuy(product: any) {
    console.log(product);
    this.router.navigate(['/search-detail', product._id]);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe(); 
  }
}