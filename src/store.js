import { configureStore } from '@reduxjs/toolkit'

import memoSlice from './slices/memoSlice';
import memoLike from './slices/memoLike';

export default configureStore({
    reducer : {
        memo : memoSlice,
        like : memoLike,
    },
})