import React from 'react';
import {useSelector} from "react-redux";

const CountDisplay = () => {

    const {count} = useSelector(state => state)

    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    );
};

export default CountDisplay;