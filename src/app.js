import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: 'Gas Bill', amount: 3300 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 5500, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1950, createdAt: 4 }));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);  

ReactDOM.render(jsx, document.getElementById('app'));