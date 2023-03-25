import React from "react";
import $ from "jquery";

import cabin from "../src/assets/img/cabin.png";
import cake from "../src/assets/img/cake.png";
import circus from "../src/assets/img/circus.png";
import game from "../src/assets/img/game.png";
import safe from "../src/assets/img/safe.png";
import submarine from "../src/assets/img/submarine.png";

export default function Portfolio() {
  var modaled = "";
  function getModala(modal) {
    modaled = modal;
    let modaly = "";
    modaly = $(modal)[0];
    modaly.classList.remove("d-none");
    $("body").addClass("modal-open");
  }
  function closeModal() {
    console.log(modaled);
    let modaly = "";
    modaly = $(modaled)[0];
    console.log(modaled);
    $(modaled)[0].classList.add("d-none");
    $("body").removeClass("modal-open");
  }
  return (
    <>
      <section className="page-section portfolio my-4 py-5" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-md-6 col-lg-4 mb-5"
              onClick={() => {
                getModala("#portfolioModal1");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cabin} alt="" />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              onClick={() => {
                getModala("#portfolioModal2");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="" />
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              onClick={() => {
                getModala("#portfolioModal3");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="" />
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              onClick={() => {
                getModala("#portfolioModal4");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={game} alt="" />
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5 mb-md-0"
              onClick={() => {
                getModala("#portfolioModal5");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={safe} alt="" />
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              onClick={() => {
                getModala("#portfolioModal6");
              }}
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal6"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal1Label"
                    >
                      Log Cabin
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img
                      className="img-fluid rounded mb-5"
                      src={cabin}
                      alt=""
                    />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal2Label"
                    >
                      Tasty Cake
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img className="img-fluid rounded mb-5" src={cake} alt="" />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal3Label"
                    >
                      Circus Tent
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img
                      className="img-fluid rounded mb-5"
                      src={circus}
                      alt=""
                    />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal4Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal4Label"
                    >
                      Controller
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img className="img-fluid rounded mb-5" src={game} alt="" />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal5"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal5Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal5Label"
                    >
                      Locked Safe
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img className="img-fluid rounded mb-5" src={safe} alt="" />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="portfolio-modal modal fade d-none"
        id="portfolioModal6"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal6Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              className="close"
              onClick={closeModal}
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal6Label"
                    >
                      Submarine
                    </h2>

                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img
                      className="img-fluid rounded mb-5"
                      src={submarine}
                      alt=""
                    />

                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={closeModal}
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
