import React from "react";
import { useMissionList } from "../hooks/useMissionList";
import { Link } from "react-router-dom";
import "./Missions.scss";

function MissionList() {
  const { error, loading, data } = useMissionList();
  if (loading) return;
  if (error) return <p>Error something.</p>;

  return (
    <div className="MissionList">
      {data.launchesPast.map((item) => {
        console.log(data);
        return (
          <div className="firstcard">
            <img
              className="image"
              src={
                item.ships[0]?.image
                  ? item.ships[0]?.image
                  : "https://i.imgur.com/IpYJWUW.jpg"
              }
              alt=""
            />
            <div className="text-left p-3 mb-2">
              <p className="info">{item.mission_name}</p>
              <p className="info"> {item.rocket.rocket_name}</p>
              <Link className="ms-2 btn btn-dark" to={`/${item.id}`}>
                ShowMore
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MissionList;
