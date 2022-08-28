import { Button, Card } from "@blueprintjs/core";

import { useDispatch, useSelector } from '../../../redux/hooks';
import { getCounterState, increment, decrement } from '../../../redux/slices/counterSlice';

import styles from "./Counter.module.css"

const Counter = () => {
    const dispatch = useDispatch();
    const { value } = useSelector(getCounterState);

    const onIncrementClick = () => {
        dispatch(increment());
    }

    const onDecrementClick = () => {
        dispatch(decrement());
    }

    return (
        <Card className={styles.counter}>
            <h4 className={"bp4-heading"}>You clicked {value} time(s)</h4>

            <p>This example takes initial random value from SSR rendered initial state</p>

            <div className={styles.counter__actions}>
                <Button icon="plus" intent="primary" text="Increment" onClick={onIncrementClick}/>
                <Button icon="minus" text="Decrement" onClick={onDecrementClick}/>
            </div>
        </Card>
    )
}

export default Counter;