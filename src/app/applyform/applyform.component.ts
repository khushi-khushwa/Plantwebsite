import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrentitemService } from '../services/currentitem.service';
import { ApplyservicesService } from '../services/applyservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.scss'],
})
export class ApplyformComponent implements OnInit {
  serviceform: FormGroup;
  titlevalue:any;
  servicedata:any;
 sendData:any

  constructor(
    private fb: FormBuilder,
    private applyservice: CurrentitemService,
    private dataofapply: ApplyservicesService,
    private router:Router
  ) {}


  formData = [
    {
      name: 'name',
      type: 'text',
      required: true,
      placeholder: 'Enter name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      placeholder: 'Enter email',
    },
    {
      name: 'selectservice',
      type: 'select',
      required: true,
      placeholder: 'Select service',
      options: [
        { name: 'maintenance' },
        { name: 'hedge' },
        { name: 'crafting' }, 
        { name: 'consultant' },
        { name: 'seed' },
        { name: 'grass' },
      ],
    },
  ];


  ngOnInit(): void {
    this.serviceform = this.fb.group({});

    this.formData.forEach((element, index) => {
      console.log(element);
      if (element.name === 'email') {
        this.serviceform.addControl(
          element.name,
          this.fb.control(
            '',
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
          )
        );
      } else {
        this.serviceform.addControl(
          element.name,
          this.fb.control('', Validators.required)
        );
      }
    });

    console.log(this.serviceform);
    // this.apply();
  }

  // apply() {
  //   const chooseservice = this.dataofapply.data;

  //   if (chooseservice && chooseservice.length > 0) {
  //     chooseservice.map((ele) => {
  //       console.log(ele.title);
  //       this.servicedata = ele;
  //       // this.titlevalue = ele.title;
  //     });
  //   }
  // }

  submit() {
    const optionvalue = this.serviceform.get('selectservice')?.value;
const selectedService = optionvalue.toLowerCase();
          const chooseservice = this.dataofapply.data; 
                 console.log(chooseservice)
    const servicedata = chooseservice.find(title  =>  title.title.toLocaleLowerCase() === selectedService)
     console.log(servicedata)
    if (servicedata) {
    
  //       this.sendData['title']=servicedata.title
  //       this.sendData['description']=servicedata.description
  //       this.sendData['charges']=servicedata.charges
        
  // console.log(this.sendData)
  //     this.sendData['userdata']= this.serviceform.value;
    this.sendData = {
      title: servicedata.title,
      description: servicedata.description,
      charges: servicedata.charges,
      userdata: this.serviceform.value
    };
    
      this.applyservice.applyservice(this.sendData).subscribe((res)=>{
console.log(res,'sdfg')
      });
      console.log('Form submitted successfully', this.sendData);
        this.serviceform.reset();
this.router.navigate(['/gardening'])
    } else {
      console.log('Selected service does not match');
    }

  }
}
