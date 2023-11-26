import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@material-ui/icons";
import { Work } from "@material-ui/icons";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            SMPIT Pesantren Nururrahman Boarding School
          </h3>
          <p>Junior High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
          SMAIT Pesantren Nururrahman Boarding School
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p>Senior High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
          Trisakti University of Petroleum Engineering
          </h3>
          <p>Bachelor degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            PT IFCA Property365 Indonesia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {/* Frontend */}
          </h4>
          <p>As a Front End developer, develop a websites with React</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Vendor Kalbe           </h3>
          <h4 className="vertical-timeline-element-subtitle">
           {/* Backend */}
          </h4>
          <p>
          As a Backend Developer , develop a server-side web application using a REST API
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
