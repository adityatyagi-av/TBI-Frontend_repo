'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import MainTeam from "./mainteam";


const Teams = () => {
  return (
    <div className="flex  flex-col mx-10 ">
      <Tabs aria-label="Options" fullWidth={true} size="lg"  className=" mx-auto mb-5 py-3">
        <Tab key="mainteam" title="Main Team">
            
        </Tab>
        <Tab key="development" title="Development">
          <MainTeam/>
        </Tab>
        
        <Tab key="design" title="Design">
           
        </Tab>
        <Tab key="marketing" title="Marketing">
          
        </Tab>
        
      </Tabs>
    </div> 
  )
}

export default Teams
