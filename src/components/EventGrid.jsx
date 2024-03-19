import React from 'react';
import { Box, Image, Text, Badge, Button, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

const EventGrid = ({ events }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'white');
    const shadow = useColorModeValue('lg', 'dark-lg');

    return (
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={6}>
            {events.map((event, index) => (
                <GridItem key={event.id} bg={bgColor} borderRadius="lg" overflow="hidden" boxShadow="md" transition="all 0.3s">
                    <Image src={event.imageUrl} alt={event.name} objectFit="cover" width="100%" height="200px" borderTopRadius="lg" />

                    <Box p={5}>
                        <Text fontWeight="600" fontSize="xl" mb={2} color={textColor}>{event.name}</Text>
                        <Text fontSize="sm" mb={4} color="gray.500">{event.date} • {event.time}</Text>
                        <Text mb={1} fontWeight="500">Location: {event.location}</Text>
                        <Text mb={1} fontWeight="500">Organizer: {event.organizer}</Text>
                        <Text mb={4} fontWeight="500">{event.attendees} attendees</Text>

                        <Button width="full" mt={2} colorScheme="purple" variant="solid" _hover={{ bg: 'purple.600' }}>
                            Learn More
                        </Button>
                    </Box>

                    {event.isFull && (
                        <Badge position="absolute" top="2" right="2" colorScheme="red">
                            Almost Full
                        </Badge>
                    )}
                </GridItem>
            ))}
        </Grid>
    );
};

export default EventGrid;
