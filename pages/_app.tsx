import { FC } from 'react'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../styles/common.css'

const App: FC<AppProps> = ({ Component, ...pageProps }) => {
	const { store, props } = wrapper.useWrappedStore(pageProps);

  	return <Provider store={store}>
		<Component {...props}/>
  	</Provider>
}

export default App
