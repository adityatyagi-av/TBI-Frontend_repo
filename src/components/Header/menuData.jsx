const menuItems = [
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Upcoming Events",
    href:"/upcomingevents"
  },
  {
    title: "Recent Events",
    href:"/recentevents"
  },
  {
    title: "Technical Incubation",
    href:"/technicalincubation"
  },
  {
    title: "Mentors",
    href:"/mentors"
  },
  {
    title: "Contact",
    href:"/contact"
  },
  {
    title: "Activites",
    href:"/activities"
  },
  


];
const dropDownItems=[{
  id:1,
  title:"Events",
  items: [
    {
    id:11,
    title:"Upcoming Events",
    path:"/upcomingevents",
  },
  {
    id:22,
    title:"Recent Events",
    path:"/recentevents",
  }
] 
},
{
  id:2,
  title:"Incubation",
  items: [
    {
    id:21,
    title:"Technical Incubation",
    path:"/technicalincubation",
  },
  {
    id:22,
    title:"Bio Incubation",
    path:"/bioincubation",
  },
  {
    id:23,
    title:"Bio Incubation",
    path:"/bioincubation",
  }
]
},
{
  id:2,
  title:"Activities",
  items: [
    {
    id:21,
    title:"Technical Incubation",
    path:"/technicalincubation",
  },
  {
    id:22,
    title:"Bio Incubation",
    path:"/bioincubation",
  }
] 
}
]

export {dropDownItems,menuItems};
