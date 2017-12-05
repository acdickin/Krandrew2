import React ,{Component} from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

class ThisCarousel extends Component{
	renderImages(){
		 return this.props.images.map((img)=>{
			 return(
				 <div key={img.id}>
					 <img className="carousel-img" alt={"Carousel Image "+ img.id} src={require('../img/'+img.src)}/>
				 </div>
			 )
	  })
	}
	render(props){
		return(
		  <Carousel axis="horizontal">
				{this.renderImages()}
	    </Carousel>
		)
	}
}

export default ThisCarousel;
