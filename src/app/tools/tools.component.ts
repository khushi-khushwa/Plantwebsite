import { Component, OnInit } from '@angular/core';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  tools;
  constructor( private service:ApplyservicesService, private router:Router) { }

  ngOnInit(): void {
      this.tools = this.service.filterdata().filter(value=>{
       return value.catergory === "tools"
        
      })
  }
  onbuy(p){
    console.log(p);
    this.router.navigate(['/tools-detail', p.id])
  }



}
