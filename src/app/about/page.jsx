'use client'
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import AboutTbi from "./abouttbi";
import Teams from "./teams";
import Objectives from "./Objectives";
import Milestones from "./Milestones";


export default function About() {
  return (
    <div className="flex flex-col mx-auto ">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className=" md:mx-auto mb-4 py-2">
        <Tab key="abouttbi" title="About TBI">
          <AboutTbi />
        </Tab>
        <Tab key="objectives" title="Objectives">
          <Objectives />
        </Tab>
        <Tab key="milestones" title="Milestones">
          <Milestones />
        </Tab>
        <Tab key="teams" title="Teams">
          <Teams />
        </Tab>
      </Tabs>
    </div>
  );
}
