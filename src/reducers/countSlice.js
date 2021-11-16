const {createSlice} = require("@reduxjs/toolkit");


const countSlice = createSlice ({
    name:"countSlice",
    initialState: {count: 0},
    reducers: {
        inc: state => {
            console.log("inc.........")
            state.count += 1
        },
        dec: state => {
            console.log("dec.........")
            return {count: state.count -1}
        }
    }
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer