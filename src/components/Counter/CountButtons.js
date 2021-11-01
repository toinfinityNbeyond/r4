import React from 'react';
import {useDispatch} from "react-redux";

const CountButtons = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => { dispatch({type:'INC'}) }} >INC</button>
            <button onClick={() => { dispatch({type:'DEC'}) }} >DEC</button>
        </div>
    );
};

export default CountButtons;