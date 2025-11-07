import { Box, Text, VStack, Heading, Grid, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Records() {
  const records = {
    title: "Athletic Records",
    track: [
      { event: "100m Dash", time: "10.82s" },
      { event: "200m Dash", time: "22.34s" },
      { event: "400m Dash", time: "50.12s" },
      { event: "Long Jump", time: "21' 3\"" },
    ],
    football: [
      { event: "40 Yard Dash", result: "4.49s" },
      { event: "Bench Press (225 lbs)", result: "12 reps" },
      { event: "Vertical Jump", result: "36 in" },
      { event: "Broad Jump", result: "10' 2\"" },
      { event: "Shuttle Run", result: "4.18s" },
      { event: "3-Cone Drill", result: "6.9s" },
    ],
  };

  return (
    <VStack spacing={10} p={6} mt={12}>
      <Heading
        fontSize="2xl"
        fontWeight="medium"
        color="#4682B4"
        fontFamily="'Russo One', sans-serif"
        mb="5"
      >
        {records.title}
      </Heading>

      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Track & Field Records */}
        <MotionBox
          w={{ base: '90%', md: '450px' }}
          minW="320px"
          minH="400px"
          m="5"
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
          position="relative"
          overflow="hidden"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Decorative background pattern */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgGradient="linear(to-b, #f8f9fb, #eceff3)"
            bgImage="url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%2710%27><circle cx=%275%27 cy=%275%27 r=%270.3%27 fill=%27%23dcdcdc%27/></svg>')"
            bgRepeat="repeat"
            bgSize="15px 15px"
            zIndex={0}
          />

          <Heading
            fontSize="xl"
            mb={4}
            color="#4682B4"
            fontFamily="'Russo One', sans-serif"
            zIndex={2}
            position="relative"
          >
            Track & Field PRs
          </Heading>

          <Grid gap={3} zIndex={2} position="relative">
            {records.track.map((record, index) => (
              <Box
                key={index}
                p={3}
                borderRadius="8px"
                bgColor="transparent"
                _hover={{ bg: "#dfe6f3" }}
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontFamily="'Russo One', sans-serif"
                  fontSize="lg"
                >
                  {record.event}
                </Text>
                <Text
                  color="#000"
                  fontFamily="'Orbitron', sans-serif"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {record.time}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>

        {/* Football Combine Metrics */}
        <MotionBox
          w={{ base: '90%', md: '450px' }}
          minW="320px"
          minH="400px"
          m="5"
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
          position="relative"
          overflow="hidden"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Decorative background pattern */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgGradient="linear(to-b, #f8f9fb, #eceff3)"
            bgImage="url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%2710%27><circle cx=%275%27 cy=%275%27 r=%270.3%27 fill=%27%23dcdcdc%27/></svg>')"
            bgRepeat="repeat"
            bgSize="15px 15px"
            zIndex={0}
          />

          <Heading
            fontSize="xl"
            mb={4}
            color="#4682B4"
            fontFamily="'Russo One', sans-serif"
            zIndex={2}
            position="relative"
          >
            Football Metrics
          </Heading>

          <Grid gap={3} zIndex={2} position="relative">
            {records.football.map((record, index) => (
              <Box
                key={index}
                p={3}
                borderRadius="8px"
                bgColor="transparent"
                _hover={{ bg: "#dfe6f3" }}
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontFamily="'Russo One', sans-serif"
                  fontSize="lg"
                >
                  {record.event}
                </Text>
                <Text
                  color="#000"
                  fontFamily="'Orbitron', sans-serif"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {record.result}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Records;
