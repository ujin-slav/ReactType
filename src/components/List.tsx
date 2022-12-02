import React,{FC, useContext} from 'react';
import { IUser } from './UserList';
// import { RootState } from "../store/slices";
import { TypedUseSelectorHook, useSelector} from "react-redux";
import { RootState } from '../store';
import { observer } from 'mobx-react';
import { Context,useStore } from '..';

type Props = {
    deleteUser: (id: string) => void
}

const List:FC<Props> = ({deleteUser}) => {

    const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
    //const list = useCounterSelector((state) => state.users.users);
    const {store} = useStore()
    const list = store.getUsers()

    return (
        <div>
             {list.map((item: IUser) => {
                return ( 
                    <div>
                        {item.email}
                        <button onClick={()=>deleteUser(item._id)}>X</button>
                    </div>
                )
            })}
        </div>
    );
};

export default observer(List);