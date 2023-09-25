'use client'
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { mainteam, developerteam, designteam, marketingteam } from "./team";
import TeamCard from "./teamcards";
import BoardOfGoverners from "@/components/BoardOfGoverners/BoardOfGoverners";


const Teams = () => {
  return (
    <div className="flex  flex-col max-w-screen-xl mx-auto ">
      <Tabs aria-label="Options" fullWidth={true} size="lg" radius="" className=" mx-auto mb-5 py-3">
        <Tab key="boardMembers" title="Board Members">
          <BoardOfGoverners />
        </Tab>
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
