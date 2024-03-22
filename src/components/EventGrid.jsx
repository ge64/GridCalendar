import React from 'react';
import { Box, Image, Text, Badge, Button, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import styles from './EventGrid.module.css';

const EventGrid = ({ events }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'white');
    const shadow = useColorModeValue('lg', 'dark-lg');
    const getImageUrl = (imageName) => {
        return `/${imageName}`;
    };

    return (
        <Grid className={styles.gridContainer}>
            {events.map((event, index) => (
                <GridItem key={event.id} className={styles.eventCard}>

                    <Image src={getImageUrl(event.imageUrl)} alt="Event" className={styles.eventImage} />

                    <Box className={styles.eventInfo}>
                        <Text className={styles.eventTitle}>{event.name}</Text>
                        <Text className={styles.eventDate}>{event.date} • {event.time}</Text>
                        <Text className={styles.eventLocation}>Location: {event.location}</Text>
                        <Text className={styles.eventOrganizer}>Organizer: {event.organizer}</Text>
                        <Text className={styles.eventAttendees}>{event.attendees} attendees</Text>

                        <Button className={styles.learnMoreBtn}>
                            Learn More
                        </Button>
                    </Box>

                    {event.isFull && (
                        <Badge className={styles.eventBadge} position="absolute" top="2" right="2" colorScheme="red">
                            Almost Full
                        </Badge>
                    )}
                </GridItem>
            ))}
        </Grid>

    );
};

export default EventGrid;
