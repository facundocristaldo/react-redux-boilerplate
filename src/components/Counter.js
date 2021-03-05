import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/actions/counterActions';

export default function Counter() {
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Counter value: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}