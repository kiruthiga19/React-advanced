const redux = require('redux')
const createStore = redux.createStore


const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const combineReducers =  redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_ICECREAM  = 'BUY_ICECREAM'
const BUY_CAKE='BUY_CAKE'


// action syntax
// {
//     type: BUY_CAKE,
//     info: 'Fist redux action '
// }

// action creator ->is a function that returns an action

function buycake(){
    return{
       
                type: BUY_CAKE,
             info: 'Fist redux action '
         
    }
}

function buyicecream(){
    return{
        type:BUY_ICECREAM
    }
}

//(previousState,action) =>newState

// const initialState ={
//     numOfCakes:10,
//     numbOfIcecreams:20
// }

const initialCakeState ={
    numOfCakes:10
}

const initialIceCreamState={
    numbOfIcecreams: 20
}

// const reducer = (state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM:return{
//             ...state,
//             numbOfIcecreams:state.numbOfIcecreams-1
//         }

//         default: return state
//     }
// }


const cakereducer = (state = initialCakeState ,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }


        default: return state
    }
}

const IceCreamReducer = (state = initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numbOfIcecreams:state.numbOfIcecreams-1
        }

        default: return state
    }
}


// combined reducer provied a multiple reducer

const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream: IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial state",store.getState())
const unsubscribbe = store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())