import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/heroSlider.scss';

import first from '../../public/assets/first_slider.png';
import second from '../../public/assets/second_slider.png';
import third from '../../public/assets/third_slider.png';

const slides = [
  {
    title: "Your Learning Journey Continues: Discover New Grades!",
    desc: "Your effort matters. Don’t give up!",
    btn: "View Grades",
    image: first,
  },
  {
    title: "Up-to-the-Minute: Explore New Notifications Today!",
    desc: "Stay informed. Check out the latest notifications!",
    btn: "View Notifications",
    image: second,
  },
  {
    title: "Get Set to Explore: Check Out Our Newest Updates!",
    desc: "Your learning journey upgrades. See the latest updates!",
    btn: "View Updates",
    image: third,
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, idx) => (
        <div className="slide" key={idx}>
          <div className="slide-content">
            <div className="text-content">
              <span>{slide.title}</span>
              <p>{slide.desc}</p>
              <button>{slide.btn}</button>
            </div>
            <div className="image-wrapper">
              <img src={slide.image} alt={`Slide ${idx + 1}`} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
