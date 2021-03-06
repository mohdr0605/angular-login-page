import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
        "ProductTitle": "Navy Melange Ankle Socks"
        displayedColumns: string[] = ['ProductId','ProductCode','ProductTitle','ProductURL', 'Collection', 'AvailableSizes', 'MRP','Price', 'StyleName','StyleNumber', 'ProductTypeId'];

  products: any = [];
  dataSource: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(){

    this.httpClient.get("assets/sampleData.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      this.dataSource = data;
    });
  }

}
