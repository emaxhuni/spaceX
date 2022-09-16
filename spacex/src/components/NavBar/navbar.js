import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Loader from "./../Loader";
import { Link } from "react-router-dom";
// import Missions from "../../pages/Missions";
import "./style.scss";

const GET_ROCKET_NAMES = gql`
  {
    rockets(offset: 1) {
      id
      name
    }
  }
`;

const Navbar = () => {
  const { data, loading } = useQuery(GET_ROCKET_NAMES);

  if (loading) return <Loader />;

  return (
    <>
      <div className="navigationSpacex ">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <div className="spaceX_logo ms-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
                alt=""
              />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <nav className="nav__link">
                <ul>
                  {data.rockets.map((rocket) => {
                    return <li key={rocket.id}>{rocket.name}</li>;
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>

      {/* <Missions /> */}
    </>
  );
};

export default Navbar;
