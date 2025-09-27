import React from 'react'
import '../assets/Letter.scss'

const Letter = (props) => {
  if(props.flip){
    return(
        <div style={{...props.style, position: 'relative'}}>
        <div className='letter' style={{transform: 'scale(1.02) scaleX(-1)', position: 'absolute', background: '#0000001a'}}/>
        <div className='letter' style={{zIndex: 1, transform: 'scaleX(-1)'}}>
            <div style={{transform: 'scaleX(-1)', width: '100%', marginLeft: '-.7rem'}}>
                <span style={{color: 'blue', marginTop: '.5rem'}}>Itu ada kukis yang ngang j</span>
                <span style={{color: 'blue'}}>makang. T nntau npe kukis kesukaan</span>
                <span style={{color: 'blue'}}>apa. Karena npe selera oma-oma</span>
                <div className='wave' style={{top: '5rem', marginLeft: '1.5rem'}} />
                <div className='wave' style={{top: '5.1rem', marginLeft: '1rem'}} />
            </div>
        </div>
        </div>
    )
  } else {
    return (
        <div className='letter' style={props.style}>
            <span>Hallo sayangku ... yang kont...</span>
            <span>Selamat ulang tahun ya...</span>
            <span>Ini kuberikan kuma, sebagai</span>
            <span style={{position: 'relative', display: 'flex', width: 'fit-content'}}>Perantara kalo ngang kangen
                <span style={{position: 'absolute', right: '3.1rem', top: -2, color: 'blue', width: 'fit-content', fontSize: '1.2rem'}}>a</span>
            </span>
            <span>Nama <span style={{margin: '0px 5px'}}>:</span>kuma</span>
            <span>Hobi <span style={{margin: '0 5px 0px 10px'}}>:</span>Dipeluk</span>
            <span>Alergi <span style={{margin: '0 5px'}}>:</span>kucing kampung</span>
            <span style={{position: 'relative'}}>Jadi pastikan nape ku
                <div className='coret'/>
                <span style={{color: 'blue', marginLeft: 3}}>nape kucing</span>
            </span>
            <span style={{color: 'blue'}}>kampung nd dekat deng dia.</span>
            <span style={{color: 'blue'}}>Abis tinta btw tu polpen</span>
            <span style={{color: 'blue'}}>mmng nd b modal skali</span>
            <span style={{color: 'blue'}}>Happy birthday yaa...</span>
            <span style={{color: 'blue', marginLeft: '5rem'}}>Love u . .</span>
            <span style={{color: 'blue', marginLeft: '9rem'}}>TTD</span>
            <span style={{lineHeight: '1rem', marginLeft: '9.2rem', color: 'blue', fontSize: '1.8rem', position: 'relative'}}>
                S
                <span style={{color: 'blue', position: 'relative', left: '-.4rem', top: -2}}>U</span>
                <span style={{color: 'blue', position: 'relative', left: '-.9rem', top: 2}}>O</span>
                <span style={{color: 'blue', position: 'relative', left: '-1.4rem', top: 3}}>w</span>
                <span style={{color: 'blue', position: 'relative', left: '-1.9rem', top: 3}}>U</span>
                <div className='ttd'/>
            </span>
            <span style={{lineHeight: '.4rem', color: 'blue', marginLeft: '11rem', fontSize: '.6rem', marginTop: -5, letterSpacing: '-.04rem'}}>kontol</span>
        </div>
    )
  }
}

export default Letter