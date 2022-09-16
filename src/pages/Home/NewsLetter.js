import React from 'react'
import imgNewsLetter from '../../assets/NewsLetter.png'; 

const NewsLetter = () => {
  return (
    <section className='NewsLetter'>
        <div className='container containerNewsLetter flex'>
        <div className='left topMarign newsletterbox'>
          <h1 className='bai 700'>Subscribe our newsletter</h1>
          <button className='buttonNewsLetter'>Subscribe
          </button>
        </div>
        <div className='right newsletterbox'>
          <div className='img'>
            <img src={imgNewsLetter} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter