
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from './../product.service';
import * as productAction from './product.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Product } from '../product'
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffect {

    constructor(private action$: Actions,
        private productService: ProductService) {}

    @Effect()
    loadProducts$ = this.action$.pipe(
        ofType(productAction.ProductActionTypes.LoadProducts),
        mergeMap((action: productAction.LoadProducts) => this.productService.getProducts().pipe(
            map((products: Product[]) => new productAction.LoadProductsSuccess(products)),
            catchError(err => of(new productAction.LoadProductsFail(err)))
        ))
    )

    @Effect()
    updateProduct$ = this.action$.pipe(
        ofType(productAction.ProductActionTypes.UpdateProduct),
        map((action: productAction.UpdateProduct) => action.payload),
        mergeMap((product: Product) => this.productService.updateProduct(product).pipe(
            map(product => new productAction.UpdateProductSuccess(product),
            catchError(error => of(new productAction.UpdateProductFail(error))))
        ))
    )

    @Effect()
    createProduct$ = this.action$.pipe(
        ofType(productAction.ProductActionTypes.CreateProduct),
        map((action: productAction.CreateProduct) => action.payload),
        mergeMap((product: Product) => this.productService.createProduct(product).pipe(
            map(product => new productAction.CreateProductSuccess(product)),
            catchError(error => of(new productAction.CreateProductFail(error)))
        ))
    )

    @Effect()
    deleteProduct$ = this.action$.pipe(
        ofType(productAction.ProductActionTypes.DeleteProduct),
        mergeMap((action: productAction.DeleteProduct) => this.productService.deleteProduct(action.payload).pipe(
            map(() => new productAction.DeleteProductSuccess(action.payload)),
            catchError(err => of(new productAction.DeleteProductFail(err)))
        ))
    )
}