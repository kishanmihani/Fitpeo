const redux = require('redux');
const reduxlogger = require('redux-logger')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger=reduxlogger.createLogger();
const BUY_CAKE ='Buy_Cake';
const BUY_IceCream='BUY_IceCream';
const combineReducers = redux.combineReducers
function buycake(){
    return {
        type : BUY_CAKE,
        info : 'BUY_CAKE First redux action'
    }
}

function BuyIceCream(){
    return {
        type : BUY_IceCream,
        info : 'BUY_IceCream First redux action'
    }
}
// (previousState,  action) = newState;
const initialState = {
    numOfCakes : 10,
    numofIceCream:20
}
const initialCakesState = {
    numOfCakes : 10,
}
const initialIceCreamState = {
    numofIceCream:20
} 
const Cakereducer = (state = initialCakesState,  action) =>{
switch(action.type){
     case BUY_CAKE : return {
        ...state,
    numOfCakes : 10,
    numOfCakes : state.numOfCakes - 1
    }
    default: return state
}
}
const IceCreamreducer = (state = initialIceCreamState,  action) =>{
    switch(action.type){
         case BUY_IceCream : return {
            ...state,
            numofIceCream : state.numofIceCream - 1
        }
        default: return state
    }
    }

const rootreducer= combineReducers({
    cake:Cakereducer,
    IceCream:IceCreamreducer
})
const store= createStore(rootreducer,applyMiddleware(logger));
console.log('Initial  State',store.getState());
const unsubscribe= store.subscribe(()=>{})
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(BuyIceCream());
store.dispatch(BuyIceCream());
store.dispatch(BuyIceCream());
unsubscribe();