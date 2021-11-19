import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// 0RED5yXjEaCR5z8gccCaGgRSI2hDeKts API KEY

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragonball'])

    // const handleAdd = () => {

    //     setCategories([  ...categories, 'Goku']);

    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
           <ol>
               { 
                categories.map( category =>
                                 <GifGrid 
                                    key={category}
                                    category={category} />)
               }
           </ol>
        </>
    )
}
