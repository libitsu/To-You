import React from 'react'
import '../assets/LetterWhite.scss'

const LetterWhite = (props) => {
  if(props.fromMe){
    return(
        <div style={{...props.style, position: 'relative'}}>
            <div className='letter-white' style={{transform: 'scale(1.02)', position: 'absolute', background: '#0000001a'}}/>
            <div className='letter-white'>
                <span>Jangan sedih juga ya</span>
                <span style={{marginLeft: '1rem'}}>Sayangku</span>
                <span style={{marginLeft: '1rem'}}>Yang Ganteng dan</span>
                <span style={{marginLeft: '2rem'}}>Menawan .</span>
            </div>
        </div>
    )
  } else {
    return (
        <div className='letter-white' style={props.style}>
            <span>Jangan sedih ya</span>
            <span style={{marginLeft: '1rem'}}>Sayangku</span>
            <span style={{marginLeft: '1rem'}}>Yang Cantik dan</span>
            <span style={{marginLeft: '2rem'}}>Menawan .</span>
        </div>
    )
  }
}

export default LetterWhite