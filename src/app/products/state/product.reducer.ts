
import { ProductState, initialState } from './product.state';
import { ProductAction, ProductActionTypes } from './product.action'

export function reducer(state = initialState, action: ProductAction): ProductState {

    switch(action.type) {

        case ProductActionTypes.ToggleProductCode : 
            return {
                ...state,
                showProductCode: action.payload
            };
        
        case ProductActionTypes.SetCurrentProduct : 
            return {
                ...state,
                currentProductId: action.payload.id
            }

        // Initialize a product when the user chooses to add a new product. This is different from initializing the state
        case ProductActionTypes.InitializeProduct : 
            return {
                ...state,
                currentProductId: 0 
            };
        
        case ProductActionTypes.ClearCurrentProduct : 
            return {
                ...state,
                currentProductId: null
            }

        case ProductActionTypes.LoadProductsSuccess : 
            return {
                ...state,
                products : [...action.payload],
                error: ''
            }
            
        case ProductActionTypes.LoadProductsFail : 
            return {
                ...state,
                products: [],
                error : action.payload
            }                       

        case ProductActionTypes.UpdateProductSuccess : 
            let products = state.products.map(
                item => item.id === action.payload.id ? action.payload : item
            )
            return {
                ...state,
                products : products,
                currentProductId: action.payload.id,
                error: ''
            }
            
        case ProductActionTypes.UpdateProductFail : 
            return {
                ...state,
                error : action.payload
            }

        case ProductActionTypes.DeleteProductSuccess : 
            products = state.products.filter(
                item => item.id !== action.payload ? item : null
            )
            return {
                ...state,
                products : products,
                currentProductId: action.payload,
                error: ''
            }
            
        case ProductActionTypes.DeleteProductFail : 
            return {
                ...state,
                error : action.payload
            }            

        default: 
            return state;
    }
}