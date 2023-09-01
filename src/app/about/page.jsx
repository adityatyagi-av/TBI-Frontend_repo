'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import AboutTbi from "./abouttbi";

export default function About() {
  return (
    <div className="flex  flex-col mx-10 mt-10">
      <Tabs aria-label="Options">
        <Tab key="abouttbi" title="About TBI">
            <AboutTbi/>
        </Tab>
        <Tab key="objective" title="Objective">
          
        </Tab>
        
        <Tab key="recognition" title="Recognition">
           
        </Tab>
        <Tab key="Team" title="Team">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        
      </Tabs>
    </div>  
  );
}
