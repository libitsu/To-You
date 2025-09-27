import React from 'react'
import '../assets/Tiket.scss'

const Tiket = (props) => {
  return (
    <div className='tiket' style={props.style}>
        <div className='border' />
        <span className='no'>No.</span>
        <span className='no-value'>{props.value}</span>
        <span className='info'>INFO : 0431 354567, 0852 404 30838</span>
        <span className='bdm'>Bukit Doa Mahawu (BDM)</span>
        <span className='harga'>Rp. 25.000,- (Dua Puluh Lima Ribu Rupiah)</span>
        <span className='free'>FREE COFFEE OR TEA</span>
    </div>
  )
}

export default Tiket