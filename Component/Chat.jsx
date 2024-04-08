import React, { useState } from "react"
import Image from "next/image"
import shiba from "../assets/shiba.png"
import ChevronDown from "@/assets/svg/chevronDown"
import ChevronUp from "@/assets/svg/chevronUp"
import Button from "./Button/button"
import ChatCard from "./ChatCard"

const Chat = () => {
    const [message, setMessage] = useState("")
    const [bullishValue, setBullishValue] = useState(true)

    const styles = {
        activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
        activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
    }

    const sendMessage = () => {}

    const formattedMessagesArray = () => {
        const messages = []
        const senders = ["John", "Alice", "Bob", "Eve"]
        const contents = [
            "Hello, how are you?",
            "Did you see the latest news?",
            "I think the market is bullish.",
            "What do you think about the new cryptocurrency?",
            "I'm excited about the upcoming events.",
        ]

        const now = new Date()

        for (let i = 0; i < 3; i++) {
            const senderIndex = Math.floor(Math.random() * senders.length)
            const contentIndex = Math.floor(Math.random() * contents.length)
            const createdAt = new Date(now - i * 1000 * 60) // Messages spaced 1 minute apart

            const message = {
                sender: senders[senderIndex],
                username: `@${senders[senderIndex].toLowerCase()}`,
                isBullish: Math.random() < 0.5, // Randomly assign bullish or bearish
                createdAt: "2024/03/24", // Convert to ISO string for timestamp
                content: contents[contentIndex],
            }

            messages.push(message)
        }

        return messages
    }

    return (
        <>
            <div className="max-w-xl mt-10">
                <div className="flex justify-between">
                    <p className="font-bold pl-5">Live Chat</p>
                    <p className="text-[#6188FF]">See more</p>
                </div>

                <br />

                <div className="p-5 bg-[#222531] rounded-xl max-h-ful">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div>
                                {" "}
                                <Image src={shiba} alt="Image" />
                            </div>
                            <div className="text-left mr-10">
                                <p className="font-bold">Madhav</p>
                                <p className="text-gray-400">@madhav</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div
                                className={
                                    !bullishValue ? styles.bullishLabel : styles.activeBullishLabel
                                }
                                onClick={() => setBullishValue(true)}
                            >
                                <ChevronUp fill="#17C784" />
                                <small className="ml-1">Bullish</small>
                            </div>
                            &nbsp; &nbsp;
                            <div
                                className={
                                    bullishValue ? styles.bearishLabel : styles.activeBearishLabel
                                }
                                onClick={() => setBullishValue(false)}
                            >
                                <ChevronDown fill="#a52b2b" />
                                <small className="ml-1">Bearish</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex pl-5">
                    <div className="flex items-center text text-green-600">
                        <ChevronUp fill="#22bc64" />
                        <small className="ml-1">Bullish</small>
                    </div>
                    &nbsp; &nbsp;
                    <div className="flex items-center text-red-500">
                        <ChevronDown fill="#a52b2b" />
                        <small className="ml-1">Bearish</small>
                    </div>
                </div>

                <input
                    className="w-full bg-[#323546] p-4 outline-none rounded-xl"
                    placeholder="What's happening on BTC?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex align-center justify-end m-1">
                    <Button label="Post" onPress={sendMessage} />
                </div>

                {formattedMessagesArray()
                    .slice(0)
                    .reverse()
                    .map((message, index) => (
                        <ChatCard
                            key={index}
                            sender={message.sender}
                            senderUsername={message.username}
                            senderAvatar="https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"
                            bullish={message.isBullish}
                            timestamp={message.createdAt}
                            content={message.content}
                            likes="2.7K"
                            comments="19K"
                        />
                    ))}
            </div>
        </>
    )
}

export default Chat
