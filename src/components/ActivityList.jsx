import React from "react";

const ActivityList = ({activities, setActivities}) => {    

    console.log(activities, "Activities in ActivityList")
    return (
    <div id="allActivities">
        <h1 id="activity-title">Activities</h1>
        {activities.length ? activities.map((activity)=> {
            return(
                <div id="activity-view" key = {activity.id}>       
                    <h2>{activity.name}</h2>
                    <li>{activity.description}</li>
                </div>
            )
        }
        )
        : <div className="loader"></div>
    }
        </div>
        )
}


export default ActivityList;