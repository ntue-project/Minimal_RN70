import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProductDataList, IProductItem} from "../screen/MainScreen";

export interface IAccountObject {

    info: {

        email: string,
        password: string,
        accountName: string
    }

    interests: {

        interestedCategory: boolean[]
        likedProducts: IProductDataList
        wishlistedProduct: IProductDataList
    }

    data: {


    }
}

export const initialState = {

    info: {
        email: "",
        password: "",
        accountName: ""
    },

    interests: {

        interestedCategory: [false,false,false,false,false,false,false,false,false,false,false,false],
        likedProducts: {
            items: [
                {
                    product_id: 1,
                    title: "線圈線條筆記本",
                    price: 49,
                }
            ]},
        wishlistedProduct: { items: [{}]}
    },

    data: {

    }

} as IAccountObject

const accountSlice = createSlice({

    name: 'account',
    initialState,
    reducers: {
        // increment(state) {
        //     state = action.payload
        // },
        // decrement(state) {
        //     state.value--
        // },
        setAccountInfo(state, action: PayloadAction<IAccountObject['info']>) {
            state.info = action.payload
        },

        setInterestedCategory(state, action: PayloadAction<IAccountObject['interests']['interestedCategory']>) {
            state.interests.interestedCategory = action.payload
        },

        setProductLikeStatus(state, action: PayloadAction<IProductItem>) {

            // let dummy = [...state.interests.likedProducts.items]

            if(!state.interests.likedProducts.items.some((product: IProductItem) => product.product_id === action.payload.product_id)) {

                // @ts-ignore
                state.interests.likedProducts.items.push(action.payload)

            } else {

                state.interests.likedProducts.items = state.interests.likedProducts.items.filter((product: IProductItem) => product.product_id !== action.payload.product_id)
            }

        }
    },
})

export const selectAccount = (state: any) => state.account
export const { setAccountInfo, setInterestedCategory, setProductLikeStatus } = accountSlice.actions
export default accountSlice.reducer

