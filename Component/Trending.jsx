import React, {useState} from 'react';
import ReactSwitch from 'react-switch';
import Rate from '../Component/cmc-table/Rate';
import TrendingCard from './TrendingCard';
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"

const Trending = () =>  {
    const[checked, setChecked]=useState(false)

    const trendingData = [
        {
            number:1,
            symbole:"BTC",
            name:"Bitcoin",
            icon:fire,
            isIncrement:true,
            rate:"5.67%"
        },
        {
            number:2,
            symbole:"USDT",
            name:"USDT",
            icon:usdt,
            isIncrement:true,
            rate:"10.67%"
        },
        {
            number:3,
            symbole:"BTC",
            name:"Bitcoin",
            icon:btc,
            isIncrement:false,
            rate:"5.67%"
        },
    ];


    return (
        <div className='container px-2 my-8'>
            <div className='mx-5 max-w-screen-2xl'>
                <div className='flex justify-between text-gray-300'>
                    <h1>Today's Cryptocurrency Prices  by Market Cap</h1>
                      <div className='flex'>
                       <p className='text-gray-400'>Highlights &nbsp;</p>
                         <ReactSwitch checked={checked} onChange={()=> {setChecked(!checked)}}></ReactSwitch>

                   </div>
                </div>
                <br/>
                <div className='flex text-gray-300'>
                <p>The global crypto market cap is $2.55T, a &nbsp;</p>
                    <span><Rate isIncrement={true} rate="0.53%"/></span>
                <p>&nbsp; increase over the last dat.<span className='underline'>Read More</span> </p>
                </div>

                <div className='flex items-center my-3'>
                    
                            <TrendingCard
                            title={"Trending"}
                            icon={fire}
                            tredingData={trendingData}
            
                            />

                      <TrendingCard
                            title={"Biggest Gainers"}
                            icon={gainers}
                            tredingData={trendingData}
            
                            />

                      <TrendingCard
                            title={"Recent"}
                            icon={recent}
                            tredingData={trendingData}
            
                            />
                      
                </div>
            </div>
            
        </div>
    );
}

export default Trending;