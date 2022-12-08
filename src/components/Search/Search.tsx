import { values } from 'mobx';
import React, { FC } from 'react'
import './Search.css'
import cn from 'classnames' 

type Props = {
    value?:string
    children?: React.ReactNode,
    placeholder?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search:FC<Props> = ({...props}) => {

    const {value,
    children,
    placeholder,
    onChange} = props

    const inputClass = cn({
        'input':true
    })

    return (
        <label>
            {children}
            <input
                className={inputClass}
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>
    );
};

export default Search;