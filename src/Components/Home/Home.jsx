import React from 'react'
import './Home.css'
import img1 from '../../Assets/Image/shampoo.png'


const Home = () => {
  return (
    <div className=' hero-header'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-lg-start">
          <h3 class="text-warning"> Natural & Organic</h3>
          <h1 class="text-info">Hair <span class="">Shampoo</span> For Healthy Hair</h1>
          <p class="text-success">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et
                        magnis dis parturient montes.</p>
          </div>
          <div className="col-md-6">
          <img className='shampo mt-5' src={img1} alt=""/> 
          </div>        
           
          </div>
      </div>
      
    </div>
  )
}

export default Home