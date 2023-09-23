import { createSlice } from '@reduxjs/toolkit';

export const shopingCardSlices = createSlice({
	name: 'shopingcard',
	initialState: {
		productState: [],
	},
	reducers: {
		addProduct: (state, action) => {
			//-------------- MUTABLE WAY ---------------------------

			/*  const productToModify = state.productState.find(p => p.id === action.payload.id);
            if (productToModify) {
                productToModify.quantity =  productToModify.quantity + 1;
                return
            }
            
            state.productState.push(action.payload) */

			//-------- INMUTABLE WAY ---------
			const product = state.productState.find((p) => p.id === action.payload.id && p.size === action.payload.size);

			if (!product) {
				return { ...state, productState: [...state.productState, action.payload] };
			}

			const itemState = state.productState.map((p) => {
				if (p.id === action.payload.id && p.size === action.payload.size) {
					return {
						...p,
						quantity: p.quantity + 1,
						cost: (p.quantity + 1) * p.price,
					};
				}

				return p;
			});

			return {
				...state,
				productState: itemState,
			};
		},
		deleteProduct: (state, action) => {
			//------------- MUTABLE WAY ---------------------------
			/* const productDelete = state.productState.find((p) => p.id === action.payload.id && p.size === action.payload.size);
			if (productDelete) {
				productDelete.quantity = productDelete.quantity - 1;
				productDelete.cost = productDelete.cost - productDelete.price;

				if (productDelete.quantity === 0) {
					state.productState = state.productState.filter((product) => product.size !== productDelete.size);
				}
			} */ //Aquí con find() busca directamente el producto a eliminar; mientras que con findIndex() buscamos es su índice. Ésto porque con find() al eliminar una talla y sin importar su id eliminará las tallas repetidas, mientras que sí respeta la talla a eliminar así tenga el mismo id. 

			const productToDeleteIndex = state.productState.findIndex((p) => p.id === action.payload.id && p.size === action.payload.size);

			if (productToDeleteIndex !== -1) {
				const productToDelete = state.productState[productToDeleteIndex];

				productToDelete.quantity = productToDelete.quantity - 1;
				productToDelete.cost = productToDelete.cost - productToDelete.price;

				if (productToDelete.quantity === 0) {
					state.productState.splice(productToDeleteIndex, 1);
				}
			}
		},
		removeProductComplete: (state, action) => {
			/* const productFilter = state.productState.find((product) => product.id === action.payload.id && product.size === action.payload.size);
			if (productFilter) {
				state.productState = state.productState.filter((item) => item.size !== productFilter.size);
			}
			return state; */
			const productFilter = state.productState.findIndex((product) => product.id === action.payload.id && product.size === action.payload.size);
			if(productFilter !== -1){
				state.productState.splice(productFilter, 1);
			}
			return state;
		},
	},
});

const InitNotificationState = {
	type: null, //alert(), success() y delete()
	message: '',
	visible: false,
}

export const notificationSlices = createSlice({
	name: 'notification',
	initialState: InitNotificationState,
	reducers: {
		showNotification(state, action) {
			const { type, message } = action.payload;
			state.type = type;
			state.message = message;
			state.visible = true;
		},

		hideNotification() {
			return InitNotificationState
		},
	},
});

export const shopingCardActions = shopingCardSlices.actions;
export const notificationActions = notificationSlices.actions;
