import React from "react";
import { useParams } from "react-router";
import { useMission } from "../hooks/useMission";
import "./Missions.scss";

export default function Mission() {
  const { id } = useParams();
  const { data, loading, error } = useMission(id);

  if (loading) return;
  if (error) return <p>Error something.</p>;

  console.log({ loading, error, data });

  return (
    <div className="col-8 mx-auto mt-5">
      <div className="card   p-5">
        <div className="image">
          <img
            className="image"
            src={
              data.ships[0]?.image
                ? data.ships[0]?.image
                : "https://i.imgur.com/IpYJWUW.jpg"
            }
            alt=""
          />
        </div>
        <div className="mt-5">
          <div className="name">
            <p>{data.launch.mission_name}</p>
          </div>
          <div className="rocket_name">
            <p>Rocket: {data.launch.rocket.rocket_name}</p>
          </div>
          <div className="date">
            <p>Data: {data.launch.launch_date_local}</p>
          </div>
          <div className=" description">
            <p> Description: {data.launch.rocket.rocket.description}</p>
          </div>
          <div className="wikipedia">
            <p>Link: {data.launch.rocket.rocket.wikipedia}</p>
          </div>
          <div className="country">
            <p> Country:{data.launch.rocket.rocket.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Mission;
