import React,{createContext,useContext} from 'react';
import { render } from "react-dom";
import App from "./App";
import {
  Provider
} from "react-redux";
import { store } from "./store";
import userMobx, { IUserStore } from './store/usersMobx'

interface IContext {
  store:IUserStore
}


export const Context  = createContext<IContext>({} as IContext);
export const useStore = () => useContext(Context);

const rootElement = document.getElementById("root");
render(
  <Context.Provider value={{store: new userMobx()}}>
     <Provider store={store}>
      <App />
     </Provider>
   </Context.Provider>,
 rootElement);

