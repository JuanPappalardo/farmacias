import React from "react";
import { Jumbotron, Button } from "reactstrap";
function Home(props) {
  return (
    <div className="container pt-md-5">
      <div class="row">
        <div className="col-12 d-flex align-content-center justify-content-center">
          <Jumbotron className="home-jumbotron m-1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                  <img
                    src="/images/gummy-sanitizer.svg"
                    className="home-logo"
                  ></img>
                </div>
                <div className="col-12 col-sm-9 d-flex align-items-end">
                  <h1 className="home-title display-3 text-center">
                    <span className="donde">Local </span>
                    <span className="farma">Farma</span>
                  </h1>
                </div>
              </div>
            </div>

            <hr className="my-2" />
            <p className="lead">
              Encontra todas las farmacias de turno cerca tuyo y accede a su
              información de contacto.
            </p>
            <p className="lead">
              <Button href="/map" color="info">
                Empezar
              </Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

export default Home;
