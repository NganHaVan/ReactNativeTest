import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import {AppLoading} from 'expo';

import store from './src/Redux/store/store';
import TabNavigatorConfig from './src/Components/TabNavigation';
import reducers from './src/Redux/reducers/reducers';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      isReady:false
    }
  }
  
  componentDidMount(){
    persistStore(store,
    {
      AsyncStorage
    },
    ()=>{
      this.setState({isReady:true})
    }
  )
  }
  render() {
    if (!this.state.isReady) {
      <AppLoading/>
    }
    return (
      <Provider store={store}>
        <TabNavigatorConfig/>
      </Provider>
    );
  }
}

