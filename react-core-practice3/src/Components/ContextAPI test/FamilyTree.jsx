import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={asset}>
                    <Grandpa></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;