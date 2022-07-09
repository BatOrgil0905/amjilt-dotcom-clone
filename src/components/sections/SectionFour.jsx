import React from "react";
import { GridOne, GridTwo, GridThree, GridFour } from "../Grids";

const SectionFour = () => {
  return (
    <section className="mt-24 mb-12">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        GENERAL MODULES OF SYSTEM
      </h1>
      <div className="px-[6%] my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <GridOne />
        <GridTwo />
        <GridThree />
        <GridFour />
      </div>
    </section>
  );
};

export default SectionFour;
