import React, { FC, useEffect, useState } from 'react';
import { IAuto } from '../../App';
import Search from '../Search/Search';

type Props = {
    listAuto ?:IAuto[]
}

const auto:IAuto[] = [
    {
      name: "Volvo",
      engine: "1.6",
      power:100
    },
    {
      name: "VW",
      engine: "2.0",
      power:200
    },
    {
      name: "Opel",
      engine: "2.6",
      power:300
    }
  ]

const Form:FC<Props> = ({...props}) => {

    //const{listAuto = []} = props 
    const [searchText,setSearchText] = useState<string>('')
    const [listAuto,setListAuto] = useState<IAuto[]>(auto)

    // if(listAuto.length===0){
    //     return null
    // }

    const handlerSearch = (e:React.ChangeEvent<HTMLInputElement>):void =>{ 
        const text = e.target.value
        setListAuto(auto.filter((item)=>item.name.includes(text)))
    }

    return (
        <div>
            <Search onChange={handlerSearch}/>
            <ul>
                {listAuto.map((item, index)=>
                    <li key={index}>{item.name}</li>
                )}
            </ul>
        </div>
    );
};

export default Form;