'use client';

import React from 'react';
import { store } from '../state/store';
import { Provider } from 'react-redux';

import View from './View'

export default function Page() {

  return (
    <Provider store={store}>
      <View></View>
    </Provider>
  );
}
