import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function MuiTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Almora</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Haldwani</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Dehradun</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default MuiTimeline;
