import styles from "../../styles/banner.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Banner() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="col-md-12 p-0">
     <Carousel 
     responsive={responsive}
     autoPlaySpeed={5000}
     autoPlay={true}
     infinite={true}
     >
        <div className={styles.background_image_crousal}>
            <div className="col-md-12 text_align_crousal">
            <h1>QUALITY</h1>
            <h2 className={styles.font_security}>AND SECURITY</h2>
            <h5>Rigorous QA for an efficient & high-quality software</h5>
            <button className="btn btn-dark background_color_black mt-3"> LEARN MORE </button>
            </div>
        </div>
        <div className={styles.background_image_crousal}>
            <div className="col-md-12 text_align_crousal">
            <h1>INGENIOUS</h1>
            <h2 className={styles.font_security}>BUSINESS AUTOMATION</h2>
            <h5>Transform, scale and gain competitive edge</h5>
            <button className="btn btn-dark background_color_black mt-3"> LEARN MORE </button>
            </div>
        </div>
        <div className={styles.background_image_crousal}>
            <div className="col-md-12 text_align_crousal">
            <h1>BESPOKE</h1>
            <h2 className={styles.font_security}>SOFTWARE SOLUTIONS</h2>
            <h5>Ground-breaking software tailored to your needs</h5>
            <button className="btn btn-dark background_color_black mt-3"> LEARN MORE </button>
            </div>
        </div>
        </Carousel>
    </div>
  )
}

export default Banner