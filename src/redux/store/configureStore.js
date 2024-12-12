import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

const store = configureStore({
    reducer: rootReducer
});

export default store;




// import rootReducer from "../reducer/rootReducer";
// import { configureStore } from '@reduxjs/toolkit';

// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             immutableCheck: false, // Disable immutable state check
//         }),
// });

// // const store = configureStore({
// //     reducer: rootReducer
// // });

// export default store;