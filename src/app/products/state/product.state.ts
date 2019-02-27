
import * as fromAppState from './../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from './../product';

export interface State extends fromAppState.AppState {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number;
    products: Product[],
    error: string
}

export const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
)

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
)

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => {
        if(currentProductId === 0) {
            return { 
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
             }
        } else {
            return currentProductId ? state.products.find(product => product.id === currentProductId) : null;
        }
    }    
)

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
)

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
)