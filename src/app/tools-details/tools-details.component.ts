import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-tools-details',
  templateUrl: './tools-details.component.html',
  styleUrls: ['./tools-details.component.scss']
})
export class ToolsDetailsComponent implements OnInit {

  constructor(private route:Router,  private activeroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe((param:ParamMap)=>{
       let df = param.get("id");
       console.log(df)
    })
  }

}
