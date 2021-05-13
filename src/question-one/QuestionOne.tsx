import React, { useState } from "react";
import { IAppTabContainer } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import SearchInput from "./components/SearchInput";

import { DataService } from "../service/DataService";

import "./QuestionOne.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import JobList from "./components/JobList";

export const QuestionOne: React.FC<IAppTabContainer> = ({ service }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  // EVENTS
  const onSearch = (searchTerm: string) => {
    service
      .getJobsWithSearchTerm(searchTerm)
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SectionGroup>
      <SectionPanel>
        <SearchInput onSearch={onSearch} />
        <JobList jobs={data} />
      </SectionPanel>
    </SectionGroup>
  );
};
