import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Process.module.css";

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1);
  // let menuRef = useRef()
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setTabone(0)
  //     }
  //   }
  //   document.addEventListener("mousedown", handler)
  //   return () => {
  //     document.removeEventListener("mousedown", handler)
  //   }
  // })

  return (
    <div className="col-sm-12 p-0" >
      <div className={styles.background_process}>
        {tabone == 1 ? (
            // Tab one 
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(1)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS1
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 2
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 3
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 4
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                    Software Development Process
                  </h5>
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
        ) : tabone == 2 ? (
            // Tab 2
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(2)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 2
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 3
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 4
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                    Software Development Process 2
                  </h5>
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
        ) : tabone == 3 ? (
            // Tab 3
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 2
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(3)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 3
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 4
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                    Software Development Process 3
                  </h5>
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
        ) : tabone == 4 ? (
            // Tab 4
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 2
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 3
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(4)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 4
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                    Software Development Process 4
                  </h5>
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
        ) : tabone == 5 ? (
            // Tab 5
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 2
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 3
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 4
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(5)}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT PROCESS 5
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                    Software Development Process 5
                  </h5>
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Process;
