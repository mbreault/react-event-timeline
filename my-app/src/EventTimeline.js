import React, { useRef } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';

const EventTimeline = () => {
  const timelineRef = useRef(null);

  return (
    <div ref={timelineRef}>
      <Timeline>
        <TimelineEvent
          title="John Doe sent a SMS"
          createdAt="2016-09-12 10:06 PM"
          icon={<SmsTwoToneIcon/>}
        >
          I received the payment for $543. Should be shipping the item within a couple of hours.
        </TimelineEvent>
        <TimelineEvent
          title="You sent an email to John Doe"
          createdAt="2016-09-11 09:06 AM"
          icon={<EmailTwoToneIcon />}

        >
          Like we talked, you said that you would share the shipment details? This is an urgent order and so I am
          losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle
          reminder if you are on track already!
        </TimelineEvent>
      </Timeline>
    </div>
  );
};

export default EventTimeline;
