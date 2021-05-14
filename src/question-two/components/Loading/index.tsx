import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

// config
TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
});
const Loading = () => <TopBarProgress />;
export default Loading;
