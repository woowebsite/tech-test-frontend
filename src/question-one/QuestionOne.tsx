import React, { useState } from "react";
import { IAppTabContainer } from "../common/types";

// components
import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import SearchInput from "./components/SearchInput";
import JobList from "./components/JobList";
import Loading from "./components/Loading";

// styles
import "./QuestionOne.css";
import "bootstrap-css-only/css/bootstrap.min.css";

export const QuestionOne: React.FC<IAppTabContainer> = ({ service }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  // EVENTS
  const onSearch = (searchTerm: string) => {
    setLoading(true);
    service
      .getJobsWithSearchTerm(searchTerm)
      .then((res) => {
        setTimeout(() => {
          setData(res);
        }, 500);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SectionGroup>
      <SectionPanel>
        <SearchInput onSearch={onSearch} />
        {data && <JobList jobs={data} />}
        {loading && <Loading />}
      </SectionPanel>
    </SectionGroup>
  );
};
