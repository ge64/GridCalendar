import React from 'react';
import EventGrid from '../components/EventGrid';
import eventData from '../data/events.json';

export default {
    title: 'Event Grid',
    component: EventGrid,
};

const Template = (args) => <EventGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    events: eventData,
};
