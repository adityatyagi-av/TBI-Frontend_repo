'use client'
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import UpcomingEvents from "./upcoming";
import RecentEvents from "./recent";



const Events = () => {
  return (

    <div className="flex  flex-col mx-auto ">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className="mx-auto mb-4 py-2">
        <Tab key="upcomingevents" title="Upcoming Events">
           <UpcomingEvents/>
        </Tab>
        <Tab key="recentevents" title="Recent Events">
        <RecentEvents/>
        </Tab>
        
       
        
      </Tabs>
    </div> 
  )
}

export default Events
