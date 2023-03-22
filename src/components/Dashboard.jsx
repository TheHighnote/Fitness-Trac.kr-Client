import React, { useEffect, useState } from "react";
import { fetchMe } from "../API-Adapter";
import DashButtons from "./DashButtons";

const Dashboard = (props) => {
  const [users, setUsers] = useState({});

  async function getMe() {
    try {
      const response = await fetchMe();
      console.log(response);
      setUsers(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  console.log(users, "12345678909876543234567876");
  return (
    <div id="DashWrapper">
      <div id="Dashboard">
        <div>
          <img id="logoDash" src="/Untitled_Artwork 29.png" alt="" />
          <h1>MY DASHBOARD</h1>
          <h3>@{users.username}</h3>
          <ul>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            auctor nec lacus eu venenatis. Sed pretium sed felis eget laoreet.
            Aenean hendrerit posuere molestie. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Quisque
            pulvinar ultrices facilisis. Cras sollicitudin odio non erat
            bibendum, eget bibendum elit aliquam. Donec blandit, massa eget
            iaculis iaculis, tellus odio luctus ex, at interdum quam nunc ut
            turpis. Aenean laoreet pharetra pulvinar. Duis ac velit tempor,
            iaculis purus ut, commodo purus. Duis dapibus ac justo in hendrerit.
            Proin volutpat, ipsum ut efficitur sollicitudin, eros ipsum
            malesuada neque, nec fringilla arcu velit ut arcu. Morbi
            sollicitudin, nulla sed bibendu
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
