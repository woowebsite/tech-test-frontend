import {
  Activity,
  ActivityAllocations,
  Job,
  JobAllocations,
  Resource,
} from "../common/types";

export const getResourceSchedules = (service: any) => {
  let data = [];
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Promise.all([
        service.getJobs(),
        service.getResources(),
        service.getActivities(),
        service.getJobAllocations(),
        service.getActivityAllocations(),
      ]);
      const [jobs, resources, activities, jobAllocations, activityAllocations] =
        res;

      data = transformData(
        jobs,
        resources,
        activities,
        jobAllocations,
        activityAllocations
      );
      resolve(data);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

const transformData = (
  jobs: Job[],
  resources: Resource[],
  activities: Activity[],
  jobAllocations: JobAllocations[],
  activityAllocations: ActivityAllocations[]
) => {
  // map objs
  const jobsMapped = arr2obj(jobs, "id");
  const activitiesMapped = arr2obj(activities, "id");
  const allocJobs: any = jobAllocations.reduce(
    (obj: any, item: JobAllocations) => ({
      ...obj,
      [item["resourceId"]]: {
        allocType: "job",
        ...jobsMapped[item.jobId],
      },
    }),
    {}
  );
  const allocActivities: any = activityAllocations.reduce(
    (obj: any, item: ActivityAllocations) => ({
      ...obj,
      [item["resourceId"]]: {
        allocType: "activity",
        ...activitiesMapped[item.activityId],
      },
    }),
    {}
  );

  // transform data
  return resources.map((resource: any) => ({
    resourceName: resource.name,
    resourceId: resource.id,
    allocations: cleanArr([
      allocJobs[resource.id],
      allocActivities[resource.id],
    ]),
  }));
};

const arr2obj = (arr: any[], key: string) => {
  return arr.reduce(
    (obj: any, item: any) => ({
      ...obj,
      [item[key]]: item,
    }),
    {}
  );
};

const cleanArr = (arr: any[]) => {
  return arr.filter((x) => x != null);
};
