import React from "react";
import Slider from "react-slick";


class SimpleSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (!this.props.photos) return null;
    console.log(this.props.photos);
    return (
       <Slider className='Slider' {...settings}>
        {this.props.photos.map(image => {
            return <div key={image.id}>
                    <img src={image.photo} />
            </div>
        })}
      </Slider>
    );
  }
}

export default SimpleSlider;