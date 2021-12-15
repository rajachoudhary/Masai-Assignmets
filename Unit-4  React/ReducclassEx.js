// currrent state , action 
const  reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {
                ...state,
                count:state.count + action.payload
            }
        }
        default:{
            return state
        }
    }
}

const Incrementcounter = (amount) => ({type:"INCREMENT_COUNTER",payload:amount})
class Store {
    #state
    #reducer
    #listener
    constructor(reducer,initialState){
        this.#state = initialState
        this.#reducer = reducer
        this.#listener = []
    }
    getState(){
        return this.#state
    }
    dispatch(action){
        this.#state = this.#reducer(this.#state,action)
        this.notify()
    }
    subscribe(callback){
        this.#listener.push(callback)
        const index = this.#listener.indexOf(callback)
        return () => {
            this.#listener = this.#listener.filter(a=>a!==callback)
        }
        notify(){
            for(let listener of this.#listener){
                listener(this.#state)
            }
        }
    }
}

