import React from 'react';
import {useDispatch} from "react-redux";

const CountButtons = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => { dispatch(inc()) }} >INC</button>
            <button onClick={() => { dispatch(dec()) }} >DEC</button>
        </div>
    );
};


export default CountButtons;