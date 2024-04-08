import { useContext } from "react"
import { CoinMarketContext } from "../context/CoinMarketContext"

import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import Image from "next/image"

const styles = {
    modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
    modalContent: `bg-[#3B405C] border border-gray-500/10 rounded-lg p-3 w-max w-1/3`,
    input: `w-full p-2 border rounded-lg mb-5 border-gray-600/200 outline-none text-gray-200 bg-[#3B405C]`,
    button: `bg-[#171924] p-2 px-5 rounded-lg text-white hover:opacity-50`,
    label: `font-bold text-3xl text-gray-200`,
    closeModalButton: `hover:text-red-300 text-gray-100 cursor-pointer`,
}

const SwapCrypto = () => {
    const {
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        mint,
        coins,
        loadingCoins,
        amount,
        setAmount,
        fromToken,
        setFromToken,
        toToken,
        setToToken,
    } = useContext(CoinMarketContext)

    if (openBuyCryptoModal)
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className="flex items-center justify-between">
                        <p className={styles.label}>Swap your crypto</p>
                        <p
                            className={styles.closeModalButton}
                            onClick={() => {
                                setOpenBuyCryptoModal(false)
                                setAmount(0)
                                setFromToken("")
                                setToToken("")
                            }}
                        >
                            &times;
                        </p>
                    </div>
                    <div className="mb-5" />
                    <label htmlFor="fromToken" className="block mb-2 ml-2 text-gray-200">
                        From
                    </label>
                    <select
                        name="fromToken"
                        className={styles.input}
                        placeholder="Token to swap"
                        onChange={(e) => setFromToken(e.target.value)}
                        value={fromToken}
                    >
                        <option value="ETH">ETH</option>
                        <option value="Dai">Dai</option>
                        <option value="Dogecoin">Dogecoin</option>
                        <option value="Usdc">Usdc</option>
                    </select>
                    <label htmlFor="fromToken" className="block mb-2 ml-2 text-gray-200">
                        To
                    </label>
                    <select
                        name="toToken"
                        className={styles.input}
                        placeholder="Token to swap"
                        onChange={(e) => setToToken(e.target.value)}
                        value={toToken}
                    >
                        <option value="Dai">Dai</option>
                        <option value="Dogecoin">Dogecoin</option>
                        <option value="Usdc">Usdc</option>
                    </select>
                    <label htmlFor="amount" className="block mb-2 ml-2 text-gray-200">
                        Amount
                    </label>
                    <input
                        name="amount"
                        className={styles.input}
                        placeholder="Token to swap"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <button className={styles.button} onClick={mint}>
                        Swap!
                    </button>
                </div>
            </div>
        )

    return <></>
}

export default SwapCrypto
