import React from 'react';
import CheveronUp from '../../assets/svg/chevronUp'
import ChevronDown from '@/assets/svg/chevronDown';

function Rate({isIncrement, rate}) {
    return (
        <div className='flex items-center'>
            {isIncrement ? <CheveronUp fill="#17C784"/> : <ChevronDown fill="#EA3943"/>}
        <p className={isIncrement ? "text-green-600" : "text-red-600"}>{rate}</p>
        </div>
    );
}

export default Rate;