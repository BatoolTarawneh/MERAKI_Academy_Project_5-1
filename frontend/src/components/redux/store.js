import { configureStore } from "@reduxjs/toolkit";

import projectReducer from "./project/projectSlice"

import skillReducer from "./skills/skillsSlice"


import authReducer from "./reducers/auth/index"
import experiancesReducer from "./reducers/experiances/index"
import selectedReducer from "./reducers/selected/index"
import balanceReducer from "./reducers/balance/index"




import offerReducer from "./offers/offerSlice"




export default configureStore({
reducer:{

    auth:authReducer,
    project: projectReducer,
    skill:skillReducer,
    experiances:experiancesReducer,
balance:balanceReducer,



    offer:offerReducer,
    
    selected:selectedReducer

}
})