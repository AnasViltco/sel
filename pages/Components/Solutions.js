import styles from "../../styles/banner.module.css";



function Solutions() {
  return (
    <div className="container text-center py-5">
       <p className={styles.solution_heading}>SOLUTIONS</p>
       <div className="row mt-5">
        <div className="col-md zoomdown">
            <div className="display_hover">
                <div className="col-md-12  background_card_icons">
            <i id="icons_color" class="fas fa-id-card"></i>
            </div>
            </div>
            <h6 className="mt-4 color_text_gray">BANKING & FINANCE</h6>
        </div>
        <div className="col-md zoomdown">
            <div className="display_hover">
                <div className="col-md-12  background_card_icons">
            <i id="icons_color"  class="fas fa-heartbeat"></i>
            </div>
            </div>
            <h6 className="mt-4 color_text_gray">HEALTHCARE & MEDICAL</h6>
        </div>
        <div className="col-md zoomdown">
            <div className="display_hover">
                <div className="col-md-12  background_card_icons">
            <i id="icons_color" class="fas fa-id-card"></i>
            </div>
            </div>
            <h6 className="mt-4 color_text_gray">EDUCATION</h6>
        </div>
        <div className="col-md zoomdown">
            <div className="display_hover">
                <div className="col-md-12  background_card_icons">
            <i id="icons_color" class="fas fa-id-card"></i>
            </div>
            </div>
            <h6 className="mt-4 color_text_gray">E-COMMERENCE</h6>
        </div>
        <div className="col-md zoomdown">
            <div className="display_hover">
                <div className="col-md-12  background_card_icons">
            <i id="icons_color" class="fas fa-id-card"></i>
            </div>
            </div>
            <h6 className="mt-4 color_text_gray">ERP</h6>
        </div>
        
       </div>
    </div>
  )
}

export default Solutions