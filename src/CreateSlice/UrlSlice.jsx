import { createSlice } from "@reduxjs/toolkit";

export const UrlSlice = createSlice({
  name : 'home',
  initialState : {
    url : {},
    genres :{}
  },

  reducers : {
    getApiConf: (state,action)=>{
      state.url = action.payload
    },
    getGenre : (state,action)=>{
      state.genres = action.payload
    }
  }
})

export const {getApiConf , getGenre} = UrlSlice.actions;
export  default UrlSlice.reducer