import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  firststyle: any = { width: '100%', height: '30rem' };
  secondstyle: any = { width: '100%', height: '35rem' };
  thirdstyle: any = { width: '100%', height: '40rem' };
deliverdata:any
  orderDetail: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private fb: FormBuilder,
    private applyfororder: ApplyservicesService,
    private dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private orderservice: CurrentitemService
  ) { }

  buyData: any = [
    {
      formGroupname: 'contactDetail',
      formControl: [
        { name: 'name',     type: 'text',   placeholder: 'Enter your name',  required: true },
        { name: 'email',    type: 'email',  placeholder: 'Enter your email', required: true },
        { name: 'number', type: 'number', placeholder: 'Number',           required: true },
      ]
    },
    {
      formGroupname: 'deliveryDetail',
      formControl: [
        { name: 'country', type: 'text',   placeholder: 'Country',   required: true },
        { name: 'address', type: 'text',   placeholder: 'Address',   required: true },
        { name: 'city',    type: 'text',   placeholder: 'City',      required: true },
        { name: 'zipcode', type: 'number', placeholder: 'Zip Code',  required: true },
      ]
    },
    {
      formGroupname: 'paymentDetail',
      formControl: [
        {
          name: 'paymentMethod', type: 'radio', required: true,
          option: [
            { name: 'UPI',             method: 'UPI' },
            { name: 'wallets',         method: 'wallets' },
            {
              name: 'CreditDebit', moreoption: 'add', method: 'Credit/Debit',
              detail: [
                { name: 'cardNumber',  method: 'card Number',type: 'text',   placeholder: 'Enter Card Number', required: true },
                { name: 'expiryDate', method: 'expiry Date', type: 'date',   placeholder: 'Expiry Date',       required: true },
                { name: 'cvv',     method: 'cvv',    type: 'number', placeholder: 'CVV',               required: true }
              ]
            },
            {
              name: 'NetBanking', moreoption: 'add', method: 'NetBanking',
              detail: [
                { name: 'State Bank of India (SBI)', type: 'radio' },
                { name: 'Union Bank of India',       type: 'radio' },
                { name: 'Punjab National Bank (PNB)',type: 'radio' },
                { name: 'Kotak Mahindra Bank',       type: 'radio' },
                { name: 'HDFC Bank',                 type: 'radio' },
                { name: 'Bank of Maharashtra',       type: 'radio' }
              ]
            },
            { name: 'Cash on Delivery', method: 'Cash on Delivery' }
          ]
        }
      ]
    }
  ];

  value: number = 1;
  applyId: any;
  netOption: boolean = false;
  carditem: boolean = false;
  isLinear = true;
  data: any;
  deliveryitem: any;
  deliverycharge: any = 50;
  price: any;
  totalpay: any;

  ngOnInit(): void {

    this.applyfororder.filterdata().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data)
      this.checkTheItem();
    });

    // ── Build the entire reactive form ──────────────────────────────────────
    this.orderDetail = this.fb.group({});

    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.applyId = params.get('id');
    });

    this.buyData.forEach((section: any) => {
      const group = this.fb.group({});

      if (section.formGroupname !== 'paymentDetail') {
        // ── contactDetail & deliveryDetail 
        section.formControl.forEach((control: any) => {
          if (control.name === 'email') {
            group.addControl(control.name, new FormControl('', [
              Validators.required,
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]));
          } else {
            group.addControl(
              control.name,
              new FormControl('', control.required ? Validators.required : [])
            );
          }
        });

      } else {
        // ── paymentDetail 
        
        group.addControl('paymentMethod', new FormControl('', Validators.required));

        // Nested group for Credit/Debit card fields
        const creditGroup = this.fb.group({
          cardNumber: ['', ],
          expiryDate: ['', ],
          cvv:        ['', ]
        });
        group.addControl('CreditDebit', creditGroup);

        // nested netbanking option
        const netGroup = this.fb.group({
          selectedBank: ['', ]
        });
        group.addControl('NetBanking', netGroup);
      }

      this.orderDetail.addControl(section.formGroupname, group);
    });

    console.log('Reactive Form Structure:', this.orderDetail);
  }

  // Toggle card / net-banking detail panels 
  inputOpen(name: string): void {
    if (name === 'Credit/Debit') {
      this.carditem  = true;
      this.netOption = false;
    } else if (name === 'NetBanking') {
      this.netOption = true;
      this.carditem  = false;
    } else {
      this.carditem  = false;
      this.netOption = false;
    }
  }

  checkTheItem(): void {
    const foundItem = this.data.find((item: any) => item._id === this.applyId);
    if (foundItem) {
      this.price    = foundItem.price;
      this.totalpay = parseInt(this.price) + this.deliverycharge;
      this.deliverdata = foundItem
      this.deliveryitem = {
        category:        foundItem.category,
        discount:        foundItem.discount,
        fakeprice:       foundItem.fakeprice,
        origin:          foundItem.origin,
        shippingCharges: foundItem.shippingCharges,
        dispatch:        foundItem.dispatch,
       image:foundItem.image
      };
    }
  }

  minus(): void {
    if (this.value > 1) {
      this.value--;
      this.totalpay = this.price * this.value + this.deliverycharge;
    }
  }

  add(): void {
    this.value++;
    this.totalpay = this.price * this.value + this.deliverycharge;
  }

  orderConfirm(): void {
    this.deliveryitem['user']      = this.orderDetail.value;
    this.deliveryitem['totalpay']  = this.totalpay;
    this.deliveryitem['price']     = this.price;
    this.deliveryitem['quantity']  = this.value;
    this.deliveryitem['date']      = new Date();
this.deliveryitem['productId']      = this.applyId


     
     console.log(this.deliveryitem)
    const dialogRef = this.dialog.open(OrderconfirmComponent);
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.orderservice.orderadd(this.deliveryitem).subscribe({
          next: () => {
            this._snackbar.open('Your order is confirmed', 'close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['notif-success'],
            });
          },
          error: (error) => console.log(error)
        });
      }
    });
  }
}