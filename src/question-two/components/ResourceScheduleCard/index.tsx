import React from "react";
import dayjs from "dayjs";

export interface ResourceSchedule {
  resourceName: string;
  resourceId: number;
  allocations: {
    allocType: "job" | "activity";
    name: string;
    start: string;
    end: string;
  }[];
}

interface ResourceScheduleCardProps {
  rs: ResourceSchedule;
}

const ResourceScheduleCard: React.FC<ResourceScheduleCardProps> = (props) => {
  const { rs } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {rs.resourceName}{" "}
          <span className="text-muted">(#{rs.resourceId})</span>
        </h5>
        <div className="text-gray-700 text-base">
          {rs.allocations.map((x, idx) => (
            <div className="text-muted mb-4" key={idx}>
              <div>type: {x.allocType}</div>
              <div>name: {x.name}</div>
              <div>start: {dayjs(x.start).format("DD.MM.YYYY HH:mm")}</div>
              <div>end: {dayjs(x.start).format("DD.MM.YYYY HH:mm")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceScheduleCard;
