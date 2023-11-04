import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage{

  public productForm: FormGroup;
  public producto:Product = this.productService.getProductsWhere(this.productService.pos);
  

  constructor(private formBuilder: FormBuilder, 
    private productService: ProductService,
    private toastController: ToastController,
    private router: Router,
    ) { 
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required], 
      description: [''],
      photo: ['',Validators.required],
      type: ['', Validators.required],
    });
  }

  public async updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.productService.pos,product);
    
    const toast = await this.toastController.create({
      message: "Producto añadido",
      duration: 2000,
      position: 'top',

    });
    console.log(product);
    toast.present();
    this.router.navigate(['/tabs/tab1']);
  }
  
 
  

}


