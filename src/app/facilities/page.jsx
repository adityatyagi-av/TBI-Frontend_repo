'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Infrastructure from "./infrastructure";
import Support from "./support";
import TechAid from "./techaid";




const Facilities = () => {
  return (

    <div className="flex  flex-col mx-auto ">
      <Tabs aria-label="Options" fullWidth={false} size="lg" color="secondary" className="mx-auto mb-4 py-2">
        <Tab key="infrastructure" title="Infrastructure">
          <Infrastructure/>
        </Tab>
        <Tab key="support" title="Support">
          <Support/>
        </Tab>
        <Tab key="tech" title="Tech Aid">
          <TechAid/>
        </Tab>


      </Tabs>
    </div>
  )
}

export default Facilities