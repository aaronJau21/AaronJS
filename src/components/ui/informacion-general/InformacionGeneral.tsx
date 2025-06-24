import React from "react";
import { VideoComponent } from "./video/VideoComponent";

interface Props {
  title: string;
}

export const InformacionGeneral = ({ title }: Props) => {
  return (
    <section
      className={`bg-[url(https://starkcloud.com/wp-content/uploads/2024/12/La-tecnologia-del-futuro-5-avances-que-cambiaran-el-mundo-2000x1200-1.jpg)]  bg-cover h-[85vh] `}
    >
      <VideoComponent title={title} />
    </section>
  );
};
