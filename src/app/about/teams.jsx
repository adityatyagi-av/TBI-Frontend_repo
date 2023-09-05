'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { mainteam, developerteam, designteam, marketingteam } from "./team";
import TeamCard from "./teamcards";


const Teams = () => {
  return (
    <div className="flex  flex-col mx-10 ">
      <Tabs aria-label="Options" fullWidth={true} size="lg" radius="" className=" mx-auto mb-5 py-3">
        <Tab key="mainteam" title="Main Team">
          <TeamCard team={mainteam[0]} />
        </Tab>
        <Tab key="development" title="Development">
          <TeamCard team={developerteam[0]} />
        </Tab>

        <Tab key="design" title="Design">
          <TeamCard team={designteam[0]} />
        </Tab>
        <Tab key="marketing" title="Marketing">
          <TeamCard team={marketingteam[0]} />
        </Tab>

      </Tabs>
    </div>
  )
}

export default Teams
