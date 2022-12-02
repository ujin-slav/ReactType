import React, { FC, useEffect, useState,useContext } from 'react';
import axios from 'axios'
import List from './List';
import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from '../store';
import { addUsers } from '../store/usersSlice';
import {Context} from "../index";

interface IPostCarousel {
    docs: IUser[],
    totalDocs: number,
    limit: number,
    page: number,
    totalPages: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    //hasNextPage: boolean,
    prevPage: boolean,
    nextPage: boolean
}


export interface IUser {
    _id: string,
    email: string,
    name: string,
    nameOrg: string,
    inn: string,
    logo: {}
}

const UserList:FC = () => {

    const useCounterDispatch = () => useDispatch<AppDispatch>();
    const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useCounterDispatch();
    const value = useCounterSelector((state) => state.users.users);
    const {store} = useContext( Context )
    const [list,setList] = useState<IUser[]>([])

    useEffect(()=>{
        axios.post<IPostCarousel>(
            "http://localhost:5000/api/getCarousel",
            {"page":"1","limit":"10","search":""}
        ).then((result)=>{
            //dispatch(addUsers(result.data.docs))
            store.setUsers(result.data.docs)
        })
    },[])

    const deleteUser =(id:string):void => {
        setList(list.filter(item=>item._id!==id))
    }

    return (
        <div>
           <List deleteUser={deleteUser}/>
        </div>
    );
};

export default UserList;