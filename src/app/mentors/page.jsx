'use client'
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import MentorPage from "./individual";




const Mentors = () => {
  return (

    <div className="flex  flex-col mx-auto max-w-screen-xl">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className="mx-auto mb-4 py-21 ">
        <Tab key="technical" title="Technical Mentors">
         <MentorPage/>
        </Tab>
        <Tab key="business" title="Business Mentors">
        <MentorPage/>
        </Tab>
        <Tab key="financial" title="Financial Partner">
        <MentorPage/>
        </Tab>


      </Tabs>
    </div>
  )
}

export default Mentors
