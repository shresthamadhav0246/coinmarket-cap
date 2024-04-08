import Trending from "../Component/Trending"
import Headers from "../Component/Header"
import CMCTable from "@/Component/cmc-table/CMCTable."
import SwapCrypto from "@/Component/SwapCrypto"

export default function Home() {
    return (
        <>
            <Headers />
            <SwapCrypto />
            <Trending />
            <CMCTable />
        </>
    )
}
