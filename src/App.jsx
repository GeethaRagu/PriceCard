import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import PriceCard from "./Components/PriceCard/PriceCard";


const App = () => {
  const cardDetails = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      privateprojectsenabled: "fa-solid fa-xmark",
      privateprojectstext: "text-muted",
      support: "Dedicated Phone Support",
      supportenabled: "fa-solid fa-xmark",
      supporttext: "text-muted",
      subdomain: "Free Subdomain",
      subdomainenabled: "fa-solid fa-xmark",
      subdomaintext: "text-muted",
      report: "Monthly Status Reports",
      reportenabled: "fa-solid fa-xmark",
      reporttext: "text-muted",
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      privateprojectsenabled: "fa-solid fa-check",
      privateprojectstext: "normal",
      support: "Dedicated Phone Support",
      supportenabled: "fa-solid fa-check",
      supporttext: "normal",
      subdomain: "Free Subdomain",
      subdomainenabled: "fa-solid fa-check",
      subdomaintext: "normal",
      report: "Monthly Status Reports",
      reportenabled: "fa-solid fa-xmark",
      reporttext: "text-muted",
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited Users",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      privateprojectsenabled: "fa-solid fa-check",
      privateprojectstext: "normal",
      support: "Dedicated Phone Support",
      supportenabled: "fa-solid fa-check",
      supporttext: "normal",
      subdomain: "Free Subdomain",
      subdomainenabled: "fa-solid fa-check",
      subdomaintext: "normal",
      report: "Monthly Status Reports",
      reportenabled: "fa-solid fa-check",
      reporttext: "normal",
    },
  ];
  return (
   
      <>
          <PriceCard cardDetails={cardDetails}/>
      </>
  
  );
};

export default App;
