import { configureStore } from "@reduxjs/toolkit";
import { notificationSlices, shopingCardSlices } from "./slices";

export default configureStore({
    reducer: {
        shopingcard: shopingCardSlices.reducer,
        notification: notificationSlices.reducer,
    }
}); 