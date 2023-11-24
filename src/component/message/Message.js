import React from 'react'
import './message.css'

const Message = ({ m,own }) => {
  return (
    <React.Fragment>
      {own ?
        <div className={own ? 'owndiv' : 'div'}>
          <div className={own ? 'ownmessage' : 'message'}>
            <div className='content'>
              <p>{m.message}</p>
            </div>
          </div>
          <img className='contentimg' src='./pics/dp.jpg' alt='' />
        </div> :
        <>
          <div className={own ? 'owndiv' : 'div'}>
            <img className='contentimg' src='./pics/dp.jpg' alt='' />
            <div className={own ? 'ownmessage' : 'message'}>
              <div className='content'>
                <p>{m.message} </p>
              </div>
            </div>
          </div>
        </>

      }
    </React.Fragment>

  )
}

export default Message
