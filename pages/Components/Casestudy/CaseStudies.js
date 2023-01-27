import styles from "../../../styles/Casestudy.module.css"

function CaseStudies() {
  return (
    <div className="col-md-12 mt-5">
        <div className="col-md-12 text-center" >
           <h2 className={styles.heading_casestudy}><b> CaseStudies </b></h2>
           <div className="mt-4">
           <h6 className={styles.sub_heading_casestudy}>See examples of the bespoke software solutions,</h6>
           <h6 className={styles.sub_heading_casestudy}><strong>CRM, LMS</strong> and <strong>mobile apps</strong> we’ve created for our clients.</h6>
           </div>
            </div>
            <div className="container mt-5 pt-4 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-12 px-5 text-center">
                        <img src="../images/laptop1.png" className="img-fluid"  />
                        <h3 className={styles.heading_casestudy_p}><b>PLEXAAR</b></h3>
                        <h6 className={styles.sub_heading_casestudy}>A high-end CRM system for businesses of all sizes</h6>
                        <button className="btn btn-danger px-4 py-3 mt-3"> CASE STUDY </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12  px-5 text-center">
                        <img src="../images/laptop2.png" className="img-fluid"  />
                        <h3 className={styles.heading_casestudy_p}><b>LIVE CHAT SYSTEM</b></h3>
                        <h6 className={styles.sub_heading_casestudy}>A multi-purpose Chat System for customers & service providers</h6>
                        <button className="btn btn-danger px-4 py-3 mt-3"> CASE STUDY </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CaseStudies