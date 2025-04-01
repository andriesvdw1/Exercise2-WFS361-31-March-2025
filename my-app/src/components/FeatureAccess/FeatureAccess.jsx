import React from 'react'
import './FeatureAccess.css'
function FeatureAccess({plan, feature}) {
    const accessMatrix = {
        basic: {
        dashboard: true,
        analytics: false,
        },
        premium: {
        dashboard: true,
        analytics: true,
        },
        };
    let messages = ["Feature is available","Upgrade your plan to access this feature","Invalid plan or feature"];
    let features = ["dashboard", "analytics"];
    let messageNumber = 0;
    let messageNumber2 = 0;

    switch (plan) {
        case 'basic':
            {messageNumber = 0}
            switch (feature) {
                case 'dashboard':
                    {messageNumber = 0}
                    {messageNumber2 =1}
                    break;
            
                default:
                    {messageNumber = 2}
                    break;
            }
            break;
        
        case 'premium':
            {messageNumber = 0}
            {messageNumber2 = 0}
            break;
    
        default:
            {messageNumber = 2}
            {messageNumber2 = 2}
            break;
    }
  return (
    <>    
        <div>Plan: {plan}</div>
        <div>Feature: {features[0]}:{messages[messageNumber]}</div>
        <div>Feature: {features[1]}:{messages[messageNumber2]}</div>
        <br /> <br/>
    </>

  )
}

export default FeatureAccess