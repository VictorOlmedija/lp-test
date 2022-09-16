import React from 'react'
import imgtiTle from '../../assets/imgTitle.svg'


const HotDeals = () => {
  return (
    <section className='hotDeals'>
        <div className='container grid'>
             <div className='box flex'>
                <div className='para'>
                    <h3 className='bai 700'>Hot deals for you</h3>
                    <p className='roboto 400'>Online shopping for retail sales direct to consumers</p>
                </div>
            </div>
            <div className='box flex'>
                <div className='imgTitle'>
                    <img src={imgtiTle} alt="" />
                </div>
                <div className='para'>
                    <h1 className='inter 700'>1.5% cashback</h1>
                    <p className='roboto 400'>Online shopping for retail sales direct to consumers</p>
                </div>
            </div>
            <div className='box flex'>
                <div className='imgTitle'>
                    <img src={imgtiTle} alt="" />
                </div>
                <div className='para'>
                    <h1 className='inter 700'>30-day terms</h1>
                    <p className='roboto 400'>Online shopping for retail sales direct to consumers</p>
                </div>
            </div>
            <div className='box flex'>
                <div className='imgTitle'>
                    <img src={imgtiTle} alt="" />
                </div>
                <div className='para'>
                    <h1 className='inter 700'>Save Money</h1>
                    <p className='roboto 400'>Online shopping for retail sales direct to consumers</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HotDeals