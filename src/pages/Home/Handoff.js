import React from 'react'
import imgStrategic from '../../assets/Strategic.svg'
import imgCalendar from '../../assets/Calendar.svg';
import imgCard from '../../assets/card.svg';

const Handoff = () => {
  return (
    <section className='Handoff'>
      <div className='container containerHandoff flex'>
        <div className='left'>
          <div className='imgHandoff'>
            <img src={imgCard} alt=''/>
          </div>
        </div>
        <div className='right handoffBox'>
            <h1 className='bai 600'>Handoff your work smarter now</h1>
            <p className='roboto 400'>Create documentation for the collaborators (i.e. designers or devs) directly in your design file.</p>
          <div className='itensHandoff'>
            <div className='imgItemHandoff'>
              <img src={imgStrategic} alt="" />
            </div>
            <div className='textItemHandoff'>
              <h1>Strategic</h1>
              <span>Suggests that the component spacing between cards and elements.</span>
            </div>            
          </div>
          <div className='itensHandoff'>
            <div className='imgItemHandoff'>
            <img src={imgCalendar} alt="" />
            </div>
            <div className='textItemHandoff'>
              <h1>Work  schedule</h1>
              <span>work schedule is the time an employee is expected to be on the job</span>
            </div>        
          </div>
        </div>
      </div>
  </section>
  )
}

export default Handoff