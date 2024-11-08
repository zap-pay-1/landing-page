import React from "react";
import { Compare } from "@/components/ui/compare";
/* style={{
  transform: "rotateX(15deg) translateZ(80px)",
}}*/
export function Developers() {
  return (
    <div className=" w-10/12 md:w-full h-[60vh] md:h-[90vh] px-1 md:px-8 flex items-center justify-center  [transform-style:preserve-3d]">
      <div
       
        className="p-1 md:p-1 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-10/12 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="/images/carbon-2.svg"
          secondImage="/images/carbon-1.svg"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
