import styles from "../../../styles/banking.module.css"

function Bankingsoft() {
  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 p-0">
            <img src="../images/back.webp" className={styles.img_width_banking} />
        </div>
        <div className="col-md-12 mt-5" >
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className={styles.border_account_bank} >
                        <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 col-2 text-right ">
                            <span className={styles.check_circle} ><i class="fas fa-check-circle"></i></span>
                        </div>
                        <div className="col-md-10 col-10">
                            <h5>Account Management</h5>
                            <h6 className={styles.account_card_h6}>Real-time transaction & account processing</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.border_account_bank} >
                        <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 col-2 text-right ">
                            <span className={styles.check_circle} ><i class="fas fa-check-circle"></i></span>
                        </div>
                        <div className="col-md-10 col-10">
                            <h5>Security & Compliance</h5>
                            <h6 className={styles.account_card_h6}>Flexibly configurable & securely scalable</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.border_account_bank} >
                        <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 col-2 text-right ">
                            <span className={styles.check_circle} ><i class="fas fa-check-circle"></i></span>
                        </div>
                        <div className="col-md-10 col-10">
                            <h5>Digital Agility</h5>
                            <h6 className={styles.account_card_h6}>Cash flow management & POS optimization</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bankingsoft