import React from "react";
import { IAppTabContainer } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import ColumnLeft from "./components/ColumnLeft";
import ColumnRight from "./components/ColumnRight";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";

// components

import "./QuestionThree.scss";

export const QuestionThree: React.FC<IAppTabContainer> = ({ service }) => {
  const headerItems = ["Home", "About", "Jobs", "Contact"];

  return (
    <SectionGroup>
      <SectionPanel>
        <Layout>
          <SideBar />
          <Header headerItems={headerItems} />
          <ColumnLeft service={service} />
          <ColumnRight />
        </Layout>
      </SectionPanel>
    </SectionGroup>
  );
};
