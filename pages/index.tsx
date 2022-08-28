import type { NextPage } from "next"

import { setValue } from '../redux/slices/counterSlice';
import { wrapper } from '../redux/store';

import Counter from "../components/common/Counter"

const IndexPage: NextPage = () => {
	return (
		<div className="container container_size-medium">
            <div className="bp4-running-text">
                <h1 className="bp4-heading">Hello world!</h1>

                <p>This is my new starter template for developing web applications.</p>

                <h3>Technology stack</h3>

                <ul>
                    <li><strong>Next.js</strong> as UI framework</li>
                    <li><strong>Blueprint.js</strong> as components library and CSS framework</li>
                    <li><strong>Redux Toolkit</strong> for state management with SSR support</li>
					<li><strong>TypeScript</strong> included</li>
                </ul>
            </div>

            <div style={{ marginTop: "30px" }}>
                <div className="bp4-text-large">And here's simple counter component example: </div>
                <Counter/>
            </div>
        </div>
	)
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const counterValue = random(0, 10);
    store.dispatch(setValue(counterValue));

    return {
        props: {}
    }
});

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export default IndexPage
