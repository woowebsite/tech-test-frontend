import React, { useEffect, useState } from "react";
import { IAppTabContainer } from "../common/types";

import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import { getResourceSchedules } from "./utils";
import Loading from "./components/Loading";
import ResourceScheduleCard, {
  ResourceSchedule,
} from "./components/ResourceScheduleCard";

export const QuestionTwo: React.FC<IAppTabContainer> = ({ service }) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = () => {
    setLoading(true);
    getResourceSchedules(service)
      .then((result) => {
        setData(result);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SectionGroup>
      <SectionPanel>
        <h1>Resource schedule</h1>
        {data.map((x: ResourceSchedule) => (
          <ResourceScheduleCard key={x.resourceId} rs={x} />
        ))}
        {loading && <Loading />}
      </SectionPanel>
    </SectionGroup>
  );
};
