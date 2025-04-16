import React, { use, useContext } from 'react';
import { AssetContext, MoneyContext } from './FamilyTree';

const Myself = () => {
    const newAsset = useContext(AssetContext);
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h1>Myself</h1>
            <h1>got: {newAsset}</h1>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Myself;