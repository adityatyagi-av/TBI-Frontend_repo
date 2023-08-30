
const menuData = [
  {
    id: 1,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Events",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Recent Events",
        path: "/events",
        newTab: false,
      },
      {
        id: 22,
        title: "Upcoming Events",
        path: "/events",
        newTab: false,
      },
      
    ],
  },
  {
    id: 3,
    title: "Incubation",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Technical Incubation",
        path: "/incubation",
        newTab: false,
      },
      {
        id: 32,
        title: "Bio Incubation",
        path: "/incubation",
        newTab: false,
      },
      {
        id: 33,
        title: "Bio Incubation",
        path: "/incubation",
        newTab: false,
      },
      
    ],
  },
  
  {
    id: 4,
    title: "Mentors",
    path: "/mentors",
    newTab: false,
  },
  {
    id: 6,
    title: "Facilities",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Technical Incubation",
        path: "/incubation",
        newTab: false,
      },
      {
        id: 62,
        title: "Bio Incubation",
        path: "/incubation",
        newTab: false,
      },
      {
        id: 63,
        title: "Bio Incubation",
        path: "/incubation",
        newTab: false,
      },
      
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

  
  
];
export default menuData;
