// import styles from './Home.module.css';

//images
import imgHeaderCard from '../../assets/header-card.svg'
import icon from '../../assets/icon.svg'

const Home = () => {
  return (
    <section className='home'>
      <div className='container flex'>
        <div className='left topMarign headerTxt'>
          <h1 className='bai 700'>Banking <br/>more smart</h1>
          <p className='roboto 400'>Meet the only spend management plataform and corporate card.</p>
          <div className='buttonCard'>
            <img src={icon} alt=''/>
            <span className='roboto 500'>Get your card</span>
          </div>
        </div>
        <div className='right'>
          <div className='img'>
            <img src={imgHeaderCard} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home