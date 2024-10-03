import { TUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  user: Partial<TUser>;
  loading: boolean;
};
// Initial state with some optional fields defaulting to undefined
const initialState: TInitialState = {
  user: {},
  loading: true,
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

// Export the actions
export const { setUser } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
