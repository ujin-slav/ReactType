import React, { FC } from 'react';
import { IAuto } from '../../App';

type Props = {
    listAuto:IAuto[]
}

const Form:FC<Props> = ({...props}) => {

    const{listAuto = []} = props 

    if(!listAuto){
        return null
    }

    return (
        <ul>
            {listAuto.map((item, index)=>
                <li key={index}>{item.name}</li>
            )}
        </ul>
    );
};

export default Form;