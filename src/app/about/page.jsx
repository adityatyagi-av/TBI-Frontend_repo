'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import AboutTbi from "./abouttbi";
import Teams from "./teams";

export default function About() {
  return (
    <div className="flex  flex-col mx-auto mt-10">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className="px-10 mx-auto mb-4 py-2">
        <Tab key="abouttbi" title="About TBI">
            <AboutTbi/>
        </Tab>
        <Tab key="objective" title="Objective">
          
        </Tab>
        
        <Tab key="milestones" title="Milestones">
           
        </Tab>
        <Tab key="Team" title="Team">
          <Teams/>
        </Tab>
        
      </Tabs>
    </div>  
  );
}
