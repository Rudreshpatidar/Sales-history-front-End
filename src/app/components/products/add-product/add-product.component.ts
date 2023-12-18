import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit,OnDestroy{

  @Output() addProduct = new EventEmitter<any>();
  productForm: FormGroup;
  @Input() updateProduct: any;


constructor(private fb: FormBuilder, private http: HttpClient) {
  this.productForm = this.fb.group({
    prodId: [null, Validators.required],
    prodName: ['', [Validators.required, Validators.maxLength(50)]],
    prodDesc: ['', [Validators.required, Validators.maxLength(4000)]],
    prodSubcategory: ['', [Validators.required, Validators.maxLength(50)]],
    prodSubcategoryId: [null, Validators.required],
    prodSubcategoryDesc: ['', [Validators.required, Validators.maxLength(2000)]],
    prodCategory: ['', [Validators.required, Validators.maxLength(50)]],
    prodCategoryId: [null, Validators.required],
    prodCategoryDesc: ['', [Validators.required, Validators.maxLength(2000)]],
    prodWeightClass: [null, Validators.required],
    prodUnitOfMeasure: ['', Validators.maxLength(20)],
    prodPackSize: ['', [Validators.required, Validators.maxLength(30)]],
    supplierId: [null, Validators.required],
    prodStatus: ['', [Validators.required, Validators.maxLength(20)]],
    prodListPrice: [null, [Validators.required, Validators.min(0.01)]],
    prodMinPrice: [null, [Validators.required, Validators.min(0.01)]],
    prodTotal: ['', [Validators.required, Validators.maxLength(13)]],
    prodTotalId: [null, Validators.required],
  });}
  onSubmit(): void {
    console.log("Submit button clicked")
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      // Update the URL to your actual endpoint
      const apiUrl = 'http://localhost:8081/api/v1/products';
      if(this.updateProduct == null){
          this.http.post(apiUrl, productData).subscribe({
            next: (resp: any) =>  {console.log("Complete");this.addProduct.emit(productData);this.productForm.reset();},
            complete: () => {console.log("Complete");this.addProduct.emit(productData);this.productForm.reset();},
            error: () => {console.log("Error");this.addProduct.emit(productData);this.productForm.reset();}
          });
      }else{
        this.http.put(apiUrl, productData).subscribe({
          next: (resp: any) =>  {console.log("Complete");this.addProduct.emit(productData);this.productForm.reset();},
          complete: () => {console.log("Complete");this.addProduct.emit(productData);this.productForm.reset();},
          error: () => {console.log("Error");this.addProduct.emit(productData);this.productForm.reset();}
        });
      }
  
    }
  }
  updateDataBind(){
    this.productForm.get('prodId').setValue(this.updateProduct.prodId);
    this.productForm.get('prodName').setValue(this.updateProduct.prodName);
    this.productForm.get('prodDesc').setValue(this.updateProduct.prodDesc);
    this.productForm.get('prodSubcategory').setValue(this.updateProduct.prodSubcategory);
    this.productForm.get('prodSubcategoryId').setValue(this.updateProduct.prodSubcategoryId);
    this.productForm.get('prodSubcategoryDesc').setValue(this.updateProduct.prodSubcategoryDesc);
    this.productForm.get('prodCategory').setValue(this.updateProduct.prodCategory);
    this.productForm.get('prodCategoryId').setValue(this.updateProduct.prodCategoryId);
    this.productForm.get('prodCategoryDesc').setValue(this.updateProduct.prodCategoryDesc);
    this.productForm.get('prodWeightClass').setValue(this.updateProduct.prodWeightClass);
    this.productForm.get('prodUnitOfMeasure').setValue(this.updateProduct.prodUnitOfMeasure);
    this.productForm.get('prodPackSize').setValue(this.updateProduct.prodPackSize);
    this.productForm.get('supplierId').setValue(this.updateProduct.supplierId);
    this.productForm.get('prodStatus').setValue(this.updateProduct.prodStatus);
    this.productForm.get('prodListPrice').setValue(this.updateProduct.prodListPrice);
    this.productForm.get('prodMinPrice').setValue(this.updateProduct.prodMinPrice);
    this.productForm.get('prodTotal').setValue(this.updateProduct.prodTotal);
    this.productForm.get('prodTotalId').setValue(this.updateProduct.prodTotalId);
  }

  ngOnInit(): void {
    if(this.updateProduct != null){
      console.log(this.updateProduct)
      this.updateDataBind();
    }else{
      this.productForm.reset();
    }
  }

  ngOnChanges(changes: any) {
    console.log(changes)
    console.log(changes.updateProduct.currentValue);
    this.updateProduct = changes.updateProduct.currentValue;
    if(this.updateProduct != null){
      console.log(this.updateProduct)
      this.updateDataBind();
    }else{
      this.productForm.reset();
    }
  }

  ngOnDestroy(): void {
}

}
