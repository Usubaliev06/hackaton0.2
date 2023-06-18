import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './API'



const initialState = {
  data: null,
  userData: {
    status: null,
    error: null
  },

}



export const getData = createAsyncThunk('user/getData', async (inn) => {
  // console.log(`${API}user/${inn}`);
  const response = await fetch(`${API}user/${inn}`, {
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  })
  const data = await response.json()
  return data
})


export const dataSlice = createSlice({
  name: 'user',

  initialState,

  extraReducers: (builder) => {

    // /////////////////////////////////////////////////

    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
      state.userData.status = 'fulfilled'
      state.userData.error = null
    })
    builder.addCase(getData.pending, (state) => {
      state.data = null
      state.userData.status = 'pending'
      state.userData.error = null
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.data = null
      state.userData.status = 'rejected'
      state.userData.error = action.payload
    })
  },

})



export default dataSlice.reducer
