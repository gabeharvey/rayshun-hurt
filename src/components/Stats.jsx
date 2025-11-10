import { Box, Text, VStack, Heading, Grid, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Stats() {
  const stats = {
    title: "Johnson High School Football Stats",
    season: [
      { category: "All-Purpose Yards", value: "1,234" },
      { category: "Carries", value: "137" },
      { category: "Rushing Yards", value: "1,070" },
      { category: "Receptions", value: "7" },
      { category: "Receiving Yards", value: "130" },
      { category: "Touchdowns", value: "20" },
      { category: "Yards Per Game", value: "123" },
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
        textAlign="center"
      >
        {stats.title}
      </Heading>

      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
      >
        <MotionBox
          w={{ base: '90%', md: '500px' }}
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
            2024 Season Stats
          </Heading>

          <Grid gap={3} zIndex={2} position="relative">
            {stats.season.map((stat, index) => (
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
                  {stat.category}
                </Text>
                <Text
                  color="#000"
                  fontFamily="'Orbitron', sans-serif"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {stat.value}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Stats;
