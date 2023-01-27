import { useState } from "react";
import styles from "../../styles/digital.module.css";

function Digital() {
    const[openone, setOpenone] = useState(true)
    const[opentwo, setOpentwo] = useState(true)
    const[openthree, setOpenthree] = useState(true)
    const[openfour, setOpenfour] = useState(true)
    const[openfive, setOpenfive] = useState(true)

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center py-5 ">
            <h3><b>Get Your Product Up and Running</b></h3>
            <h6> Elevate Your Business to The Forefront of Innovation?</h6>
        </div>
        <div className={styles.digital_background}>
        <div className="container">
            <div className="row" > 
            <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-3">
                    <h3 className={styles.software_head}> <b>Software for Business Success</b></h3>
                </div>
                <div className={styles.border_left_red} >
                {/* Tabs */}
                <div className="col-md-12">
                <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    {openone ? (
                    <div className="col-md-11 col-11" onClick={()=>setOpenone(!openone)} >
                    <h5 className={styles.head} >
                    Flexible Development
                    Methodologies</h5>
                    </div>
                    ):(
                        <div className="col-md-11 col-11" onClick={()=>setOpenone(!openone)}>
                        <h5 className={styles.head_active}>
                        Flexible Development
                        Methodologies</h5>
                        <h6>
                        We offer various development processes (Waterfall, Agile or Hybrid methodologies) that you can select based on your own needs.
                        </h6>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    {opentwo ? (
                    <div className="col-md-11 col-11" onClick={()=>setOpentwo(!opentwo)}>
                    <h5 className={styles.head} >
                    Proven Expertise In
                    Multiple Technologies</h5>
                    </div>
                    ):(
                        <div className="col-md-11 col-11" onClick={()=>setOpentwo(!opentwo)}>
                        <h5 className={styles.head_active}>
                        Proven Expertise In
                    Multiple Technologies</h5>
                        <h6>We’re experts in our core technologies and thrive from learning new ones that are becoming increasingly relevant in modern software development projects.</h6>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    {openthree ? (
                    <div className="col-md-11 col-11" onClick={()=>setOpenthree(!openthree)}>
                    <h5 className={styles.head} >
                    Software Architects
                    & Consultants</h5>
                    </div>
                    ):(
                        <div className="col-md-11 col-11" onClick={()=>setOpenthree(!openthree)}>
                        <h5 className={styles.head_active}>
                        Software Architects
                        & Consultants</h5>
                        <h6>
Whether you need a preliminary technical design, a feasibility study, high-level architecture, or a technology selection process, the Selteq team provides comprehensive consulting services to meet your requirements.</h6>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    {openfour ? (
                    <div className="col-md-11 col-11" onClick={()=>setOpenfour(!openfour)}>
                    <h5 className={styles.head} >
                    Create A
                    Winning Team</h5>
                    </div>
                    ):(
                        <div className="col-md-11 col-11" onClick={()=>setOpenfour(!openfour)}>
                        <h5 className={styles.head_active}>
                        Create A
                    Winning Team</h5>
                        <h6>From a dedicated, solution-oriented development team to talented technologists and QA teams that ensure your project runs smoothly, we bring together the best people to provide solutions that keep you ahead of your competition.</h6>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    {openfive ? (
                    <div className="col-md-11 col-11" onClick={()=>setOpenfive(!openfive)}>
                    <h5 className={styles.head} >
                    Customer-Tailored
                    Solutions</h5>
                    </div>
                    ):(
                        <div className="col-md-11 col-11" onClick={()=>setOpenfive(!openfive)}>
                        <h5 className={styles.head_active}>
                        Customer-Tailored
                    Solutions</h5>
                        <h6>Our software solutions are customer-specific. We listen to your needs, we understand the challenges you face, and we’ll adapt ourselves to your processes and culture9</h6>
                    </div>
                    )}
                   
                </div>
                </div>
            
                </div>
            </div>
            <div className="col-md-6 text-center">
                <img src="/images/person.png" className="img-fluid"  />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Digital