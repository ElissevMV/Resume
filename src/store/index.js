import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import rpsSlice from "./rpsSlice";
import forumSlice from "./forumSlice";


export default configureStore({
    reducer: {
        item: itemSlice,
        rps : rpsSlice,
        forum: forumSlice
    },
});
