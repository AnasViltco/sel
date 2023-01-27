import styles from "../../../styles/banking.module.css"



function Ourclients() {
  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 py-5 text-center">
            <h3 className={styles.color_clients_heading}><b>Our Clients Always Speak Highly of Our Services</b></h3>
        </div>
        {/* cards  */}
        <div className="container mb-4">
            <div className="row">
                <div className="col-md-4">
                    <div className={styles.border_clients_cards}>
                    <div className="col-md-12 margin_neg">
                    <div className="col-md-12 text-center ">
                        <span className={styles.qutation_marks}><i class="fas fa-quote-right"></i></span>
                    </div>
                    </div>
                    <div className="col-md-12 py-3">
                        <h6 className={styles.p_banner}>I was looking for a company to help me with my software development, and it took me about two weeks to find the right company. I met with several companies, but none seemed to be a good fit. One of them was selteq.</h6>
                    </div>
                    <div className="col-md-12 pt-1 pb-4">
                        <h6 className={styles.color_client_name} ><b>Diego Clark</b></h6>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.border_clients_cards}>
                    <div className="col-md-12 margin_neg">
                    <div className="col-md-12 text-center ">
                        <span className={styles.qutation_marks}><i class="fas fa-quote-right"></i></span>
                    </div>
                    </div>
                    <div className="col-md-12 py-3">
                        <h6 className={styles.p_banner}>Selteq was able to develop my software application from scratch. They have been very professional and deliver everything they say they will do. I would highly recommend them to anyone who needs custom software development done.</h6>
                    </div>
                    <div className="col-md-12 pt-1 pb-4">
                        <h6 className={styles.color_client_name} ><b>Albie Richards</b></h6>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.border_clients_cards}>
                    <div className="col-md-12 margin_neg">
                    <div className="col-md-12 text-center ">
                        <span className={styles.qutation_marks}><i class="fas fa-quote-right"></i></span>
                    </div>
                    </div>
                    <div className="col-md-12 py-3">
                        <h6 className={styles.p_banner}>Weve been impressed by their team since the beginning. They are always responsive and helpful, and wve had very few problems with the software they helped us design. We plan to continue working with them on other projects in the future.</h6>
                    </div>
                    <div className="col-md-12 pt-1 pb-4">
                        <h6 className={styles.color_client_name} ><b>Rose Edwards</b></h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourclients