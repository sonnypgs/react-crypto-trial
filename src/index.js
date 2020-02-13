import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import './styles/misc.scss';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import { makeApolloClient } from './lib/apollo';

const render = async (AppComponent) => {
  const client = await makeApolloClient();
  return ReactDOM.render(
      <ApolloProvider client={client}>
        <AppComponent />
      </ApolloProvider>,
    document.getElementById('root')
  );
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
