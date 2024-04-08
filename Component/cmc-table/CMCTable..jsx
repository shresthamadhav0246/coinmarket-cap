import React, { useCallback, useContext, useDebugValue, useEffect, useState } from "react"
import { CoinMarketContext } from "@/context/CoinMarketContext"
import CMCHeader from "./CMCHeader"
import CMCTableRow from "./CMCTableRow"
import btc from "../../assets/btc.png"

const CMCTable = () => {
    const { getTopTenCoin } = useContext(CoinMarketContext)
    const [coinData, setCoinData] = useState(null)

    useEffect(() => {
        setData()
    }, [])

    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTopTenCoin()
            let filteredResponse = []
            for (let i = 0; i < apiResponse.length; i++) {
                const element = apiResponse[i]

                if (element.cmc_rank <= 10) filteredResponse.push(element)
            }

            setCoinData(filteredResponse)
        } catch (e) {
            console.log(e.message)
        }
    }, [getTopTenCoin])

    return (
        <div className="text-white font-bold px-2">
            <div className="mx-auto max-w-screen-2xl">
                <table className="w-full">
                    <CMCHeader />

                    {coinData && coinData ? (
                        coinData.map((coin, index) => {
                            return (
                                <CMCTableRow
                                    key={index}
                                    starNum={coin.cmc_rank}
                                    coinName={coin.name}
                                    coinSymbol={coin.symbol}
                                    coinIcon={btc}
                                    showBuy={true}
                                    hRate={coin.quote.USD.percent_change_24h}
                                    dRate={coin.quote.USD.percent_change_7d}
                                    hRateIsIncrement={true}
                                    price={coin.quote.USD.price}
                                    marketCapValue={coin.quote.USD.market_cap}
                                    volumeCryptoValue={coin.quote.USD.volume_24h}
                                    volumeValue={coin.total_supply}
                                    circulatingSupply={coin.circulating_supply}
                                />
                            )
                        })
                    ) : (
                        <></>
                    )}
                </table>
            </div>
        </div>
    )
}

export default CMCTable
