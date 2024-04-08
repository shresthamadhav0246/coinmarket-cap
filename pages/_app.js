import { CoinMarketProvider } from "@/context/CoinMarketContext"
import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <CoinMarketProvider>
                <Component {...pageProps} />
            </CoinMarketProvider>
        </MoralisProvider>
    )
}
