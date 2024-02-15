import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProducts } from "../../interfaces/IProductsProps";
import { BASE_URL } from "../../api/BASE_URL";

const initialState = {
    products: []
}

export const getProductsThunk = createAsyncThunk(
    'detail/getProductsThunk',
    async (_, {dispatch}) => {
      const response = await axios.get<IProducts>(`${BASE_URL}products/`)
      dispatch(getProducts(response.data))
    }
  )

export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;