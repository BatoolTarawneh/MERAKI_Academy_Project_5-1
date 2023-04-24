import { createSlice } from "@reduxjs/toolkit";
const offerSlice = createSlice({
  name: "offer",
  initialState: { offer: [] ,userInfoOffer: []},
  reducers: {
    setOffer: (state, action) => {
      console.log(action.payload);
      state.offer = action.payload;
    },
    setOfferByUser: (state, action) => {
        const userId = action.payload.userId;
        const offers = state.offer.filter((offer) => offer.user_id === userId);
        state.offer = action.payload;
        console.log("offer: ",action.payload);
      },
      setinfouserOfoffer : (state,action)=>{
        console.log(action.payload)
      state.userInfoOffer  = action.payload
      }
  }
});

export const { setOffer,setOfferByUser,setinfouserOfoffer } = offerSlice.actions;

export default offerSlice.reducer;
