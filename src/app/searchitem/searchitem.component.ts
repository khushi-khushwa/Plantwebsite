import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApplyservicesService } from '../services/applyservices.service';
@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.scss']
})
export class SearchitemComponent implements OnInit {

  // @Input() inputitem: any[] = [];
  matchvalue
 searchdata:any;
 showdata:any=[];
  constructor(private route:ActivatedRoute,  private router : Router ,private alldata:ApplyservicesService ) { 
    
  }
     
  // ngOnChanges(changes): void {
  //   if (changes['inputitem'] && changes['inputitem'].currentValue) {
  //     console.log("Received Search Results:", this.inputitem);
  //   }
  // }
  ngOnInit(): void {

console.log('filterdata')
    this.route.queryParams.subscribe(params =>{
      const search = params['data'] 
      // this.searchdata = this.route.snapshot.queryParamMap.get('data')
      console.log(search,'sd')
      this.searchitem(search);
    })



    
  }

  
 searchitem(search){
    
  const searchstr = search.toLocaleLowerCase();
 
  const data = this.alldata.filterdata().filter(value => {

       const namematch = value.name?.toLocaleLowerCase().match(searchstr);

       
       return namematch;
       
      })
      
      
      console.log(data)
      this.matchvalue=data
      return data;
    }
    //  const type = value.type?.toLocaleLowerCase().includes(searchstr) || false;
// this.searchResults.emit(data); 
  
// filterResults() {
//     const allItems = this.alldata.filterdata();
  
//   allItems.filter(item =>{
//       //  console.log(item.name)
//    if(item.name == this.searchdata){
//      this.showdata = item
     
//    }
  
//     })
  
//     console.log(this.showdata, 'Filtered Search Results');
//   }
onbuy(product){
  console.log(product)

    this.router.navigate(['/search-detail', product.id])
}
}
