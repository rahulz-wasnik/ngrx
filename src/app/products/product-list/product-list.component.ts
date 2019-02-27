import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Store, select } from '@ngrx/store';
import * as fromProductState from './../state/product.state';
import * as productStateSelectors from './../state/product.state';

import * as productAction from './../state/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle = 'Products';

  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  products$: Observable<Product[]>;

  error$: Observable<string>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  
  // sub: Subscription;

  componentActive: boolean = true;

  constructor(private productService: ProductService, private store: Store<fromProductState.State>) { }

  ngOnInit(): void {
    
    /**
     * Making use of selectors
     */
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => this.selectedProduct = selectedProduct
    // );
    this.store.pipe(select(productStateSelectors.getCurrentProduct)).subscribe(
      product => {
        this.selectedProduct = product
      }
    )

    /**
     * Making use of effect
     */
    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
    this.store.dispatch(new productAction.LoadProducts);
    // this.store.pipe(select(productStateSelectors.getProducts)).subscribe(
    //   products => {
    //     this.products = products;
    //   }
    // )
    /**
     * Making use of selectors and unsubscribing from the observable. Its the same piece of code as above but with auto
     * unsubscription enabled
     */

    this.products$ = this.store.pipe(select(productStateSelectors.getProducts));
    
    /**
     * takeWhile operator is used to ensure that auto unsubscription happes when the component is destryoyed 
     */
    this.store.pipe(select(productStateSelectors.getShowProductCode), takeWhile(() => this.componentActive))
    .subscribe(
      showProductCode => {
        this.displayCode = showProductCode
      }
    )

    this.error$ = this.store.pipe(select(productStateSelectors.getError));
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productAction.ToggleProductCode(value));
  }

  newProduct(): void {
   // this.productService.changeSelectedProduct(this.productService.newProduct());
   /**
    * Making use of action creators
    */
    this.store.dispatch(new productAction.InitializeProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productAction.SetCurrentProduct(product));
  }

}
