import { configureStore } from "@reduxjs/toolkit";
import UrlSlice from "./CreateSlice/UrlSlice";


export default configureStore({
    reducer : {
        home : UrlSlice
    }
})