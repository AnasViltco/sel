import styles from "../../../styles/banking.module.css"

function Bannersol() {
  return (
    <div className="col-md-12 p-0">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="../images/banner1.webp" className="img-fluid" />
                </div>
                <div className="col-md-6 m-auto">
                   <h6><b>Core Banking Software</b></h6>
                   <h3 className={styles.color_red_banner}>Focusing on Simplifying Corporate Banking</h3>
                   <h3 className={styles.color_red_banner}>and Financial Operations</h3>
                   <h6 className={styles.p_banner}>We help financial institutions, wealth management and banking companies transform their offerings with custom software development services for their customers’ emerging needs, enrich the security of end-products, speed up time to market, find valuable business insights and compete by means of technology.</h6>
                   <h6 className={styles.p_banner}>We jump into your organization’s structure and look over your internal processes to develop a fully-fledged and scalable solution that addresses both your business and financial needs</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol