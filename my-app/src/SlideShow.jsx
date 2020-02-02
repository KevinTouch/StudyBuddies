import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class SlideShow extends Component {
	render() {
		return (
			<div style={{ margin: 0, width: "100%"}}>
			<Carousel interval="5000">
				  <Carousel.Item>
				    <img
				      src={require('./imgs/studying_students_img1.jpg')}
							alt="First slide"
							style={{width: 700, height: 400}} 
				    />
				    <Carousel.Caption>
				      <h3>First slide label</h3>
				      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
					{
				  <Carousel.Item>
				    <img
				      src={require('./imgs/studying_students_img2.jpg')}
							alt="Second slide"
							style={{width: 700, height: 400}} 
				    />

				    <Carousel.Caption>
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>

					}
				  <Carousel.Item>
				    <img
				      src={require('./imgs/studying_students_img3.jpg')}
							alt="Third slide"
							style={{width: 700, height: 400}} 
				    />

				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				
				</Carousel>
				</div>
		)
	};
}

export default SlideShow;