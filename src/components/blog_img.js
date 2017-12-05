import React, {Component} from 'react';

class BlogImg extends Component{
  renderImages(){
		 return this.props.images.map((img)=>{
       return(
           <img key={img.id} alt={"Blog Image"+ img.id} className={"img-"+img.size} src={require('../img/'+img.src)}/>
       )
	  })
	}
  render(props){
    return(
      <div className="images-blk">
        {this.renderImages()}
      </div>
    )
  }
}
export default BlogImg;
