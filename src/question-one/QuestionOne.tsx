import React from "react";
import { IAppTabContainer } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import SearchInput from "./components/SearchInput";

import { DataService } from "../service/DataService";

import "./QuestionOne.css";
import "bootstrap-css-only/css/bootstrap.min.css";

export const QuestionOne: React.FC<IAppTabContainer> = ({ service }) => {
  const search = service.getJobsWithSearchTerm; //("Build").then((res) => console.log("res", res));
  return (
    <SectionGroup>
      <SectionPanel>
        <SearchInput search={search} />
      </SectionPanel>
    </SectionGroup>
  );
};
