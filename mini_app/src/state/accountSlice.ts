import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProductItemList, IProductItem} from "../screen/MainScreen";

export interface IAccountObject {

    info: {

        email: string,
        password: string,
        accountName: string
    }

    interests: {

        interestedCategory: boolean[]
        likedProducts: IProductItemList
        wishlistedProduct: IProductItemList
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
        interestedCategory: [false, false, false, false, false, false, false, false, false, false, false, false],
        likedProducts: {
            items: [
                {
                    _id: 1,
                    productTitle: "線圈線條筆記本",
                    productPrices: [49],
                    productRate: 4,
                    productTags: ["gg"],
                    productCoverImagesURL: [""]
                }
            ]
        },
        wishlistedProduct: {items: [{}]}
    },

    data: {}
} as unknown as IAccountObject

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

            if(!state.interests.likedProducts.items.some((product: IProductItem) => product._id === action.payload._id)) {

                // @ts-ignore
                state.interests.likedProducts.items.push(action.payload)

            } else {

                state.interests.likedProducts.items = state.interests.likedProducts.items.filter((product: IProductItem) => product._id !== action.payload._id)
            }

        }
    },
})

export const selectAccount = (state: any) => state.account
export const { setAccountInfo, setInterestedCategory, setProductLikeStatus } = accountSlice.actions
export default accountSlice.reducer

