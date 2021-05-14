import React, { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import Card from "../Card";

import style from "./style.module.scss";

interface ColumnLeftProps {
  service: any;
}
const ColumnLeft: React.FC<ColumnLeftProps> = (props: ColumnLeftProps) => {
  const { service } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    setLoading(true);
    service
      .getJobs()
      .then((res: any) => {
        setTimeout(() => {
          setData(res);
        }, 500);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <TopBarProgress />
      ) : (
        <div className={style.columnLeft}>
          {data.map((item: any, i) => (
            <Card key={item.id} {...item} no={i + 1} />
          ))}
        </div>
      )}
    </>
  );
};

export default ColumnLeft;
