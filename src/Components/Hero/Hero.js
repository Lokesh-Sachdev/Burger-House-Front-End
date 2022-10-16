import "./Hero.css";

import banner_1 from "../../images/burger-hero.jpg";
import banner_2 from "../../images/banner_2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="grid-container">
        <div className="grid-item-1 mix">
          <div className="flex-title">
            <h5>TRY IT TODAY </h5>
            <h1>MOST POPULAR BURGER</h1>
          </div>
          <img src={banner_1} className="banner" />
        </div>

        <div className="grid-item-2 mix">
          <div className="flex-title">
            <h5>TRY IT TODAY </h5>
            <h1>MORE FUN</h1>
            <h1>MORE TASTE</h1>
          </div>
          <img src={banner_1} className="banner" />
        </div>
        <div className="grid-item-3 mix">
          <div className="flex-title">
            <h5>TRY IT TODAY </h5>
            <h1>FRESH & CHILLI</h1>
          </div>
          <img src={banner_1} className="banner" />
        </div>
      </div>

      <div>
        <div className="banner_2-title">
          <span>ALWAYS TASTY BURGER</span>
          <h1>CHOOSE & ENJOY</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem voluptates quas iste doloribus voluptatem id,
            deleniti, itaque laudantium inventore possimus nostrum incidunt
            fugiat numquam, perspiciatis quam. Ducimus ratione quam saepe.
          </p>
        </div>
        <div className="flex-container">
          <div className="flex-items">
            <img src={banner_2} className="banner" />
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              expedita.
            </p>
            <button>ORDER NOW</button>
          </div>
          <div className="flex-items">
            <img src={banner_2} className="banner" />
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              expedita.
            </p>
            <button>ORDER NOW</button>
          </div>
          <div className="flex-items">
            <img src={banner_2} className="banner" />
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              expedita.
            </p>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
