


import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { ProductsService } from '../../service/products.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ProductsModel } from '../../models/products-model';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
}) 
export class ProductsComponent implements OnInit{

  masterProducts: ProductsModel[] = [];
  productsPojo: ProductsModel[] = [];
  newProduct: any;
  product:any;
  updateProduct: any;
  showAddProductForm = false;
  filterStatus = "all"
  filterCategory = "all"
  filterSubCategory = "all"
  search = "1"
   

  onAddProductButtonClick(): void {
    this.updateProduct =null;
    this.showAddProductForm = true;
    this.isAddInRequest.next(true);

  }

  isInRequest = new BehaviorSubject<boolean>(false);
  isInRequestObservable: Observable<boolean>

  isAddInRequest = new BehaviorSubject<boolean>(false);
  isAddInRequestObservable: Observable<boolean>

  dataSubject = new BehaviorSubject<ProductsModel[]>(undefined)
  dataSubjectObservable: Observable<ProductsModel[]>
  public removeSubscription: Subscription;

  constructor(private productsService: ProductsService){
    this.isInRequestObservable = this.isInRequest.asObservable();
    this.dataSubjectObservable = this.dataSubject.asObservable();
    this.isAddInRequestObservable = this.isAddInRequest.asObservable();

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.removeSubscription = this.productsService.getremoveProductAvailableEvent().subscribe({
      next: (resp: any) =>  {console.log("next");this.getAllProducts();},
      complete: () => {console.log('com');  },
      error: () => {      console.log("err")  }
    });
  }

  getAllProducts(){
    this.isInRequest.next(true)
    this.productsService.getAllProducts().subscribe(data => {
      this.productsPojo = data;
      this.masterProducts = data;
      this.dataSubject.next(this.productsPojo);
      this.isInRequest.next(false) 
    })
  }
  getProductById(id: any){
    this.productsService.getProductById(id).subscribe(data=>{
      this.product =data;
    })
  }



    onAddProduct(productData: any): void {
      this.updateProduct = null;
      this.showAddProductForm = false; 
      this.isAddInRequest.next(false);
      this.getAllProducts();
  }



  // onAddProductButtonClick(): void {
  //   const productId = this.productsService; // assuming you have the productId, replace with actual logic
  //   if (productId) {
  //     this.productsService.getProductById(this.newProduct).subscribe(
  //       (product) => {
  //         // Handle the retrieved product data here
  //         console.log('Product:', product);
  //       },
  //       (error) => {
  //         // Handle error
  //         console.error('Error fetching product:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Please enter a valid product ID');
  //   }
  // }


  updateproduct(prodId: number){
    this.isInRequest.next(true);
    this.updateProduct = null;
    this.updateProduct = this.productsPojo.filter(ele => ele.prodId === prodId)[0];
    this.showAddProductForm = true; 
    this.isAddInRequest.next(true);
    this.isInRequest.next(false);
  }

 
 
 
  removeproduct(prodId: number) {
    this.isInRequest.next(true)
    this.productsService.removeProduct(prodId);
  }

  statusChange(event:any){
    let selectElement = event.target;
    let value = selectElement.value;
    this.filterStatus = value.toString().toLowerCase();
    this.statusChangeFilter();
   }
  
   statusChangeFilter(){
    if(this.filterStatus != "all"){
      this.productsPojo = this.masterProducts.filter(ele => ele.prodStatus.toString().toLowerCase() == this.filterStatus);
    }else{
      this.productsPojo = this.masterProducts;
    }
    this.dataSubject.next(this.productsPojo); 
   }
  
   subCategoryChange(event:any){
    let selectElement = event.target;
    let value = selectElement.value;
    this.filterSubCategory = value.toString().toLowerCase();
    this.subCategoryChangeFilter();
   }
  
   subCategoryChangeFilter(){
    if(this.filterSubCategory != "all"){
      this.productsPojo = this.masterProducts.filter(ele => ele.prodSubcategory.toString().toLowerCase() == this.filterSubCategory);
    }else{
      this.productsPojo = this.masterProducts;
    }
    this.dataSubject.next(this.productsPojo); 
   }
  
   categoryChange(event:any){
    let selectElement = event.target;
    let value = selectElement.value;
    this.filterCategory = value.toString().toLowerCase();
    this.categoryChangeFilter();
   }
  
   categoryChangeFilter(){
    if(this.filterCategory != "all"){
      this.productsPojo = this.masterProducts.filter(ele => ele.prodCategory.toString().toLowerCase() == this.filterCategory);
    }else{
      this.productsPojo = this.masterProducts;
    }
    this.dataSubject.next(this.productsPojo); 
   }
  
   
 ////
 searchChange(event:any){
  let selectElement = event.target;
  let value = selectElement.value;
  this.search = value.toString().toLowerCase();
  this.searchChangeFilter();
 }
 searchChangeFilter(){
  this.productsPojo = this.masterProducts;
  this.dataSubject.next(this.productsPojo); 
 }

 textChange(event: any){
  console.log(event.target.value)
  const txtValue = event.target.value;
  const pattern = `(?:(?!${txtValue.toString().toLowerCase().trim()})(?:.|\n))*${txtValue.toString().toLowerCase().trim()}`
  console.log(pattern);
  const regex = new RegExp(pattern);
  if(this.search == "1"){
    this.productsPojo = this.masterProducts.filter(ele => regex.test(ele.prodId.toString().toLowerCase().trim()));
  }else if(this.search == "2"){
    this.productsPojo = this.masterProducts.filter(ele => regex.test(ele.prodDesc.toString().toLowerCase().trim()));
  }
  this.dataSubject.next(this.productsPojo); 
 }
}

  
