
import { Action } from '@ngrx/store';
import { Product } from './../product';


// Defining Enum of actions
export enum ProductActionTypes  {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    InitializeProduct = '[Product] Initialize Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    LoadProducts = '[Product] Load Products',
    LoadProductsSuccess = '[Product] Load Products Success',
    LoadProductsFail = '[Product] Load Products Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Products Success',
    UpdateProductFail = '[Product] Update Products Fail', 
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = '[Product] Create Products Success',
    CreateProductFail = '[Product] Create Products Fail',
    DeleteProduct = '[Product] Delete Product',
    DeleteProductSuccess = '[Product] Delete Products Success',
    DeleteProductFail = '[Product] Delete Products Fail'      
}

// Creating a class which represent action creators for each action giving a structure to type and payload 
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode
    constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct
    constructor(public payload: Product) {}
}

export class InitializeProduct implements Action {
    readonly type = ProductActionTypes.InitializeProduct
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductActionTypes.LoadProductsSuccess
    constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
    readonly type = ProductActionTypes.LoadProductsFail
    constructor(public payload: string) {}
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct
    constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess
    constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail
    constructor(public payload: string) {}
}

export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CreateProduct
    constructor(public payload: Product) {}
}

export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CreateProductSuccess
    constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.CreateProductFail
    constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct
    constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess
    constructor(public payload: number) {}
}

export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DeleteProductFail
    constructor(public payload: string) {}
}

// Union all the action classes to a single union type. This single union type represents all the action creators
export type ProductAction = ToggleProductCode 
    | SetCurrentProduct 
    | InitializeProduct 
    | ClearCurrentProduct 
    | LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFail
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFail