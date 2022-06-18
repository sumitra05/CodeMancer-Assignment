import React from 'react'
import style from "./InputBox.module.css"
import { Gif } from './Giphy'
import { useState } from 'react'

export const InputBox = () => {
    const [showGifBox, setShowGifBox] = useState(false);
    let [sendToBox, setSendToBox] = useState("")
    let [chat, setChat] = useState("");

    const handleGif = () => {

        setShowGifBox(true)
    }

    const sendTextToContainer = () => {

        let container = document.getElementById("container");

        const text = document.createTextNode(chat);
        let p = document.createElement("div");
        let br = document.createElement("br");
        p = p.appendChild(text);
        container.append(p);
        container.append(br);


        setChat("")

    }
    const sendGifToContainer = (url) => {

        let container = document.getElementById("container");

        let img = document.createElement("img");
        img.src = url;

        img.style.width = "80px";
        img.style.textAlign = "right"

        let br = document.createElement("br");

        container.append(img);
        container.append(br);

    }

    console.log(sendToBox)

    return (
        <>
            <div className={style.container}>
                <div className={style.nameBox}>
                    <div className={style.imageBox}>

                    </div>
                    <b> <p style={{ fontSize: "20px", marginLeft: "10px", color: "white" }}>Smita</p></b>
                </div>


                <div className={style.messageBox} id="container">

                </div>

               <div className={style.buttonBox}>
                    <input type="text" placeholder='Comment here....' className={style.inputBox} value={chat} onChange={(e) => setChat(e.currentTarget.value)} />
                    <button className={style.gifButton} onClick={handleGif}>GIF</button>
                    <button className={style.sendButton} onClick={sendTextToContainer}>Send</button>
                </div>
            </div>
            {
                showGifBox ? <Gif sendToBox={sendToBox} setSendToBox={setSendToBox} sendGifToContainer={sendGifToContainer} /> : <div></div>
            }

        </>

    )
}