import React from 'react';
import people from '../../assets/images/people.jpeg';
import arch from '../../assets/images/arch.jpeg';
import tech from '../../assets/images/tech.jpeg';


export default function Carousel() {
  return (
    <div className='container-fluid' style={{ border: '1px solid red' }}>
      <div className='row'>
        <div className="col-md-12">

          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={tech} alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="img-fluid" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>



    </div>
  )
}
