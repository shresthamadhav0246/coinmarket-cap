import { createContext, useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"

import { dogeAbi, daiAbi, usdcAbi, dogeAddress, daiAddress, usdcAddress } from "../lib/constants"

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
    const { isWeb3Enabled, isAuthenticated, user, Moralis, chainIdHex } = useMoralis()

    const [currentAccount, setCurrentAccount] = useState("")
    const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
    const [fromToken, setFromToken] = useState("ETH")
    const [toToken, setToToken] = useState("")
    const [amount, setAmount] = useState("")

    useEffect(() => {
        if (isWeb3Enabled) {
            const account = chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null
            setCurrentAccount(account)
        }
    }, [isAuthenticated])

    const getContractAddress = () => {
        if (fromToken === "Dai") return daiAddress
        if (fromToken === "Dogecoin") return dogeAddress

        if (fromToken === "Usdc") return usdcAddress
    }

    const getToAddress = () => {
        if (toToken === "Dai") return daiAddress
        if (toToken === "Dogecoin") return dogeAddress

        if (toToken === "Usdc") return usdcAddress
    }

    const getToAbi = () => {
        if (toToken === "Dai") return daiAbi
        if (toToken === "Dogecoin") return dogeAbi

        if (toToken === "Usdc") return usdcAbi
    }
    const mint = async () => {
        console.log("mint function called")
        try {
            if (fromToken === "ETH") {
                console.log("Minting ETH")
                if (!isWeb3Enabled) {
                    console.log("User not authenticated")
                    return
                }
                await Moralis.enableWeb3()
                const contractAddress = getToAddress()
                const abi = getToAbi()

                let options = {
                    contractAddress: contractAddress,
                    functionName: "mint",
                    abi: abi,
                    params: {
                        to: currentAccount,
                        amount: Moralis.Units.Token(amount),
                    },
                }
                await sendEth() // Wait for sendEth to complete
                const transaction = await Moralis.executeFunction(options)
                const receipt = await transaction.wait(4)
                console.log("Mint receipt:", receipt)
            } else {
                console.log("Swapping tokens")
                await swapTokens()
            }
        } catch (error) {
            console.error("Error in mint:", error.message)
        }
    }

    const sendEth = async () => {
        if (!isWeb3Enabled) return
        const contractAddress = getToAddress()

        let options = {
            type: "native",
            amount: Moralis.Units.ETH("0.01"),
            receiver: contractAddress,
        }
        const transaction = await Moralis.transfer(options)
        const receipt = await transaction.wait()
        console.log(receipt)
    }

    const swapTokens = async () => {
        console.log("swapTokens function called")
        try {
            if (!isWeb3Enabled) {
                console.log("User not authenticated")
                return
            }
            await Moralis.enableWeb3()

            if (fromToken === toToken) {
                console.log("Cannot swap same token")
                alert("You cannot swap the same token")
                return
            }

            const fromOptions = {
                type: "erc20",
                amount: Moralis.Units.Token(amount, "18"),
                receiver: getContractAddress(),
                contractAddress: getContractAddress(),
            }
            const toMintOptions = {
                contractAddress: getToAddress(),
                functionName: "mint",
                abi: getToAbi(),
                params: {
                    to: currentAccount,
                    amount: Moralis.Units.Token(amount, "18"),
                },
            }
            let fromTransaction = await Moralis.transfer(fromOptions)
            let toMintTransaction = await Moralis.executeFunction(toMintOptions)
            let fromReceipt = await fromTransaction.wait()
            let toReceipt = await toMintTransaction.wait()
            console.log("From receipt:", fromReceipt)
            console.log("To receipt:", toReceipt)
        } catch (error) {
            console.error("Error in swapTokens:", error.message)
        }
    }

    // Note: sendEth function is assumed to be correct based on your provided code

    const openModal = () => {
        setOpenBuyCryptoModal(true)
    }

    const getTopTenCoin = async () => {
        try {
            const res = await fetch("api/coinmarketcap")
            const data = await res.json()
            console.log("data" + data)
            return data.data.data
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <CoinMarketContext.Provider
            value={{
                getTopTenCoin,
                openBuyCryptoModal,
                setOpenBuyCryptoModal,

                fromToken,
                toToken,
                setFromToken,
                setToToken,
                amount,
                setAmount,
                mint,
                openModal,
            }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}
