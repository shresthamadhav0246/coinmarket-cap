export default function handler(req, res) {
    const getData = async () => {
        try {
            const response = await fetch(
                `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.COIN_MARKET_API_KEY}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "*/*",
                    },
                }
            )
            const data = await response.json()
            res.status(200).json({ data })
        } catch (e) {
            console.log("Error" + e)
        }
    }

    getData()
}
