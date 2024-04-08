import React from "react"
import BullishFilled from "./Button/bullishFilled"
import BearishFilled from "./Button/bearishFilled"
import Image from "next/image"
import Comment from "@/assets/svg/comment"
import Heart from "@/assets/svg/heart"
import Share from "@/assets/svg/share"
import shiba from "../assets/shiba.png"

const ChatCard = ({ content = "", timestamp, sender, bullish, senderAvatar, likes, comments }) => {
    return (
        <div className="border-b border-gray-700 pb-6 mb-6 pl-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <Image
                            width={40}
                            height={40}
                            src={shiba}
                            className="rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="flex items-center">
                        {sender}
                        &nbsp; • &nbsp;
                        <span className="text-gray-400">{timestamp}</span>
                        &nbsp; • &nbsp;
                        {bullish ? <BullishFilled /> : <BearishFilled />}
                    </div>
                </div>
            </div>
            <p className="my-5 mt-2">{content}</p>

            <div className="flex justify-between">
                <div className="flex items-center">
                    <Comment />
                    <p className="text-gray-400">{comments}</p>
                </div>

                <div className="flex items-center">
                    <Heart />
                    <p className="text-gray-400">{likes}</p>
                </div>

                <div className="fles items-center">
                    <Share />
                    <p className="text-gray-400">Share</p>
                </div>
            </div>
        </div>
    )
}

export default ChatCard
