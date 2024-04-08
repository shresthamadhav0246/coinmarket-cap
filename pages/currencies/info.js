import CMCpriceConverter from "@/Component/CMCpriceConverter"
import Header from "@/Component/Header"
import Graph from "../../Component/Graph"
import Usd from "@/assets/svg/usd"
import React, { useState, useEffect } from "react"
import Chat from "@/Component/Chat"

function info() {
    const [coinName, setCoinName] = useState("")
    const [coinSymbol, setCoinSymbol] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)

        setCoinName(urlParams.get("coin"))
        setPrice(Number(urlParams.get("price")).toLocaleString())
        setCoinSymbol(urlParams.get("symbol"))
    }

    function generateRandomData() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]

        const values = Array.from({ length: 12 }, () => Math.floor(Math.random() * 500) + 100)
        // Generate random values between 100 and 600 for each month

        const dummyData = {
            labels: months,
            values: values,
        }

        return dummyData
    }

    // Usage example:
    const dummyData = generateRandomData()

    return (
        <div className="min-h-screen">
            <Header />
            <main className="text-white px-2 mx-auto max-w-screen-2xl">
                <div className="flex items-start">
                    <div className="p-10 pl-0 pr-0 w-2/3">
                        <div className="flex justify-between">
                            <div className="flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500 text-sm">
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">Price</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">Market Cap</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">
                                    Trading View
                                </p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">History</p>
                            </div>

                            <div className="flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500 text-sm">
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">1D</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">2D</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">1M</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">3M</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">1Y</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">3Y</p>
                                <p className="p-1 px-2 mr-2 rounded-lg bg-[#171924]">5Y</p>
                            </div>
                        </div>
                        <br />
                        <Graph data={dummyData} />
                        <br />

                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <div className="flex items-center">
                                    <input className="outline-none" type="checkbox" /> &nbsp; USD
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="flex items-center">
                                    <input type="checkbox" /> &nbsp; BTC
                                </div>
                            </div>

                            <p>
                                Want more data?{" "}
                                <span className="text-[#6188FF]">Check out our API</span>
                            </p>
                        </div>
                        <br />
                        <br />

                        <CMCpriceConverter
                            from={coinName}
                            fromSymbol={coinSymbol}
                            fromLogo={coinSymbol}
                            toLogo={<Usd />}
                            price={price}
                            to="United States Dollars"
                            toSymbol="USD"
                        />
                    </div>

                    <Chat />
                </div>
            </main>
        </div>
    )
}

export default info
