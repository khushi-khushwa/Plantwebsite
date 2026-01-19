import { Component, OnInit, platformCore } from '@angular/core';
import { FormControl, FormControlName,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplyservicesService } from '../services/applyservices.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderconfirmComponent } from '../orderconfirm/orderconfirm.component';
import { CurrentitemService } from '../services/currentitem.service';
@Component({
  selector: 'app-buyitem',
  templateUrl: './buyitem.component.html',
  styleUrls: ['./buyitem.component.scss']
})
export class BuyitemComponent implements OnInit {

  firststyle: any = {
    width:'100%',
    height:'30rem'
  };
  secondstyle: any = {
    width:'100%',
    height:'35rem'
  };
  thirdstyle: any = {
    width:'100%',
    height:'40rem'
  };

     orderDetail : FormGroup;
  constructor(private activeroute:ActivatedRoute,
     private fb:FormBuilder,
     private applyfororder:ApplyservicesService, 
      private dialog: MatDialog, 
      private _snackbar:MatSnackBar, 
      private orderservice :CurrentitemService) { }

  buyData = [
    {
      formGroupname: 'contactDetail',
      formControl: [
        { name: "name", type:"text", placeholder: "Enter your name", required: true,  },
        { name: "email", type:"email", placeholder: "Enter your email", required: true, },
        { name: "password", type:"number", placeholder: "Number", required: true, },
      ]
    },
    {
      formGroupname: 'deliveryDetail',
      formControl: [
        { name: "country", type: "text", placeholder: "Country", required: true},
        { name: "address", type: "text", placeholder: "Address", required: true},
        { name: "city", type: "text", placeholder: "City", required: true },
        { name: "zipcode", type: "number", placeholder: "Zip Code", required: true },
      ]
    },
    {
      formGroupname: 'paymentDetail',
      formControl: [
            { name: 'UPI', type: 'radio' , placeholder: "upi", required: true, },
            { name: 'wallets' , placeholder: "wallets", type: 'radio', required: true},
            { 
              name: 'Credit/Debit', type: 'radio', placeholder: "Credit/Debit",  moreoption:'add',  required: true,
              detail: [
                { name: "cardNumber", type: "text", placeholder: "Enter Card Number", required: true },
                { name: "", type: "date", placeholder: "", required: true },
                { name: "cvv", type: "number", placeholder: "CVV", required: true }
              ]
            },
            {
              name: 'netbanking',type: 'radio', moreoption:'add', placeholder:'netbanking',  required: true,
              detail: [
                { name: 'State Bank of India (SBI)' ,type: 'radio', placeholder: "Enter Card Number",},
                { name: 'Union Bank of India' ,type: 'radio',placeholder: "Enter Card Number"},
                { name: 'Punjab National Bank (PNB)' ,type: 'radio', placeholder: "Enter Card Number"},
                { name: 'Kotak Mahindra Bank' ,type: 'radio', placeholder: "Enter Card Number"},
                { name: 'HDFC Bank' ,type: 'radio', placeholder: "Enter Card Number"},
                { name: 'Bank of Maharashtra' ,type: 'radio',placeholder: "Enter Card Number"}
              ]
            },
            { name: 'Cash on Delivery',type: 'radio', placeholder:'netbanking',  required: true, }
         
       
      ]
    }
  ];
  value:number=1;
  formlength:{}=[] 
  applyId:any;
  card:any;
  netOption:boolean=false;
  netbanking:any
  carditem:boolean=false;
  isLinear=true;
  data:any;
  deliveryitem:any;
  deliverycharge:any=50;
  price:any;
  
  totalpay:any;
  ngOnInit(): void {

  this.data = this.applyfororder.filterdata();

 this.orderDetail = this.fb.group({})

  this.activeroute.paramMap.subscribe((params:ParamMap)=>{
    this.applyId = params.get('id');
    console.log(this.applyId)
  });


  this.buyData.forEach(section => {
    const group = this.fb.group({});
  
    section.formControl.forEach(control => {
      if(control.name === 'email'){
        group.addControl(control.name, new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]))
         }else{
          group.addControl(control.name, new FormControl('', control.required ? Validators.required : []));
         }

       if(control.name === 'Credit/Debit'){
       this.card= control.name
       } else if (control.name === 'netbanking' ){
        this.netbanking = control.name
       }
 
          if (!control.detail) {
            group.addControl(control.name, new FormControl('', Validators.required));
          
          } else {
            const creditCardGroup = this.fb.group({});
            control.detail.forEach(detailControl => {
              console.log(detailControl);
              creditCardGroup.addControl(
                detailControl.name,
                new FormControl('', detailControl.required ? Validators.required : [])
              );
            });
            group.addControl(control.name, creditCardGroup);
          }
        });
        this.orderDetail.addControl(section.formGroupname, group);
      
      })

  
       
    console.log("Reactive Form Structure:", this.orderDetail);
    this.checkTheItem()
  }


  inputOpen(name:string){
     const srfdf = this.orderDetail.get('paymentDetail').get('Credit/Debit')
     console.log(srfdf,'fghjk')
     if (name == this.card) {
      this.carditem = true;
      this.netOption = false;  
  } else if (name == this.netbanking) {
      this.netOption = true;
      this.carditem = false;  
  } else {
      this.carditem = false;
      this.netOption = false;
  }
}

checkTheItem(){
 
  this.data.map(item =>{
    if(item.id === this.applyId){
      // console.log(item.price)
       this.price = item.price;
      this.totalpay = parseInt(this.price) + this.deliverycharge
      console.log(this.totalpay);
      this.deliveryitem =item;
        
      console.log(this.deliveryitem)
        
    }
  })
  
}

minus(){
  if(this.value >1){
    this.value = this.value-1
    this.totalpay = this.price* this.value + (this.deliverycharge)

  }
}
add(){
  if(this.value ){
    this.value = this.value+1
    console.log(this.value)
    this.totalpay = (this.price)* this.value  + (this.deliverycharge)
  }


}

orderConfirm(){
  this.deliveryitem['user'] = this.orderDetail.value 
  this.deliveryitem['totalpay']=this.totalpay
  this.deliveryitem["date"] = new Date()
  console.log(this.deliveryitem)
  // const data = {
  //   userdata,
  
  // }
    
 const DialogRef  = this.dialog.open(OrderconfirmComponent);
 DialogRef.afterClosed().subscribe((confirm:boolean)=>{
 if(confirm){
  this.orderservice.orderadd(this.deliveryitem).subscribe({
    next: ()=>{
        
      this._snackbar.open('your order is confirm','close',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['notif-success'],
      }); 
    }, error:(error)=>{
       console.log(error);
    
    }
  })
 };

 })
}
}
