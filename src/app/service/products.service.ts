import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import {  Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductsModel } from '../models/products-model';
import { Injectable, OnDestroy } from '@angular/core';

// import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductsService implements OnDestroy {
 
  apiUrl = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  //this is used for the getingallproducts
  getAllProducts(): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(`${this.apiUrl}/products`);

  }

  getProductById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/getProductById/${productId}`;
   
    return this.http.get<ProductsModel>(url);
  }


  addProduct(productData: any): Observable<any> {
    const url = `${this.apiUrl}/products`;
    return this.http.post(url, productData);
  }


//this is for updating the products  
updateProduct(product: ProductsModel): Observable<ProductsModel> {
return this.http.put<ProductsModel>(`${this.apiUrl}/products`, product);
}

//searching the products by name
getProductByName(prodName: string): Observable<ProductsModel[]> {
  return this.http.get<ProductsModel[]>(`${this.apiUrl}/productname/${prodName}`);
}



getSortedProducts(field: string): Observable<ProductsModel[]> {
  return this.http.get<ProductsModel[]>(`${this.apiUrl}/products/sort?field=${field}`);
}

removeProductSub = new Subject<any>()

getremoveProductAvailableEvent() {
  return this.removeProductSub.asObservable()
}

removeProduct(prodId: number) {
  this.http.delete<any>(`${this.apiUrl}/products/${prodId}`).subscribe({
    next: (resp: any) =>  {console.log("hs")},
    complete: () => {console.log('njaxnaj'); this.removeProductSub.next(true);  },
    error: () => {      console.log("skamsakms") ;this.removeProductSub.next(true); }
  });
}

ngOnDestroy() {

}


}


