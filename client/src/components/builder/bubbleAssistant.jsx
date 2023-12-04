import chatImage from "./chat.webp"

import { useState } from 'react';
import Chat from "./chat";



function BubbleAssistant() {
  const [chat,setChat]=useState(false)

  const openChat=()=>{
    if ( chat == true )
    { setChat(false )} else 
    { setChat(true)}
    
  }

  return (
   <>
   
   <img src={chatImage} onClick={openChat} className='bubbleAssistant-image'></img>
   {chat === true ? <Chat/> : null}
   </>
  )
}

export default BubbleAssistant
