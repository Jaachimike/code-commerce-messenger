import React, {useState, useEffect, useRef} from 'react'

const style = {
  main: `flex flex-col p-[10px] relative`
}
const Chat = () => {
  const scroll = useRef()
  return (
    <>
      <main className={style.main}>
        {/* Chat Message Component */}
      </main>
      {/* Send Message Component */}
      <span ref={scroll}></span>
    </>
  )
}

export default Chat