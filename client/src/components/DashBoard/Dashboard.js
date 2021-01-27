import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardContaier, Plus, DoubleRight } from "./DashboradElement";
import { FloatingButton } from "../SharedElement";

const Dashboard = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <DashboardContaier>
      Dashboard!!
      <div className="fixed-action-btn">
        <Link to="surveys/new">
          <FloatingButton onMouseEnter={onHover} onMouseLeave={onHover}>
            {hover ? <DoubleRight /> : <Plus />}
          </FloatingButton>
        </Link>
      </div>
    </DashboardContaier>
  );
};

export default Dashboard;
