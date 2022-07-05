import React, { useState } from 'react';


const Say = () => {
  const [say, setSay] = useState('')
  const onClickEnter = () => setSay('입장합니다 안녕하세요')
  const onClickLeave = () => setSay('퇴장합니다 안녕히 계세요')


  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{say}</h1>
    </div>
  )
}

export default Say