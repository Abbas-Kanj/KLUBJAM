import Slider from "react-slick";
import reviewerImg2 from "../../assets/Explore/images/Ellipse 24.svg";
import reviewerImg from "../../assets/Explore/images/Ellipse 26.svg";
import reviewerImg3 from "../../assets/Explore/images/Ellipse 27.svg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="flex flex-col w-full h-screen overflow-hidden z-20">
      <Slider {...settings}>
        <div className="flex flex-col text-center items-center mx-auto w-[1132px] h-[400px] mt-[282px] bg-backgroundPurple bg-opacity-20 pt-[40px] pb-[40px] pr-[70px] pl-[70px] relative z-20">
          <img src={reviewerImg} alt="" className="w-[96px] h-[96px] mx-auto" />
          <p className="text-[26px] font-bold mt-[21px] mb-[21px]">
            “I'm thrilled by the prospect of collaborating with other talented
            individuals on music projects. The platform provides easy-to-use
            tools for uploading tracks, <br /> collaborating in real-time, and
            managing projects effectively.”
          </p>
          <div className="flex flex-col">
            <small className="text-[21px] font-light">Andrew</small>
            <small className="text-[21px] font-light">Music producer</small>
          </div>
        </div>
        <div className="flex flex-col text-center items-center mx-auto w-[1132px] h-[400px] mt-[282px] bg-backgroundPurple bg-opacity-20 pt-[40px] pb-[40px] pr-[70px] pl-[70px] relative z-20">
          <img
            src={reviewerImg2}
            alt=""
            className="w-[96px] h-[96px] mx-auto"
          />
          <p className="text-[26px] font-bold mt-[21px] mb-[21px]">
            “I've been using this platform for a while now, and it has truly
            transformed the way I collaborate on music projects. The tools
            provided are intuitive and powerful. I highly recommend it to any
            musician looking to connect and create with others.”
          </p>
          <div className="flex flex-col">
            <small className="text-[21px] font-light">John</small>
            <small className="text-[21px] font-light">Musician</small>
          </div>
        </div>
        <div className="flex flex-col text-center items-center mx-auto w-[1132px] h-[400px] mt-[282px] bg-backgroundPurple bg-opacity-20 pt-[40px] pb-[40px] pr-[70px] pl-[70px] relative z-20">
          <img
            src={reviewerImg3}
            alt=""
            className="w-[96px] h-[96px] mx-auto"
          />
          <p className="text-[26px] font-bold mt-[21px] mb-[21px]">
            “As a music enthusiast, I've found this platform to be a
            game-changer. The ability to collaborate with like-minded
            individuals has opened up new possibilities for my music. The tools
            provided are top-notch and make the entire process seamless and
            enjoyable.”
          </p>
          <div className="flex flex-col">
            <small className="text-[21px] font-light">Emily</small>
            <small className="text-[21px] font-light">Singer</small>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
