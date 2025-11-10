import { Box, VStack, Heading, Text, Grid, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academics = {
    title: "Academic Achievements",
    image: "/johnson-logo.png", // Replace with your actual image
    achievements: [
      "3.3 GPA (85.022)",
      "960 SAT",
      "Volunteer Community Service (Urgent Care Sports Physical/Middle School 7v7"
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
        {academics.title}
      </Heading>

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {/* Academic photo box */}
        <MotionBox
          w={{ base: '90%', md: '600px' }}
          h={{ base: '300px', md: '400px' }}
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          overflow="hidden"
          position="relative"
          mb={8}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Subtle paper-like background */}
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

          {/* Optional watermark */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="url('/johnson-logo.png')"
            bgRepeat="repeat"
            bgSize="160px 160px"
            transform="rotate(-10deg)"
            opacity="0.1"
            filter="grayscale(100%) contrast(110%) brightness(85%)"
            zIndex={1}
          />

          {/* Academic image */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage={`url(${academics.image})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            zIndex={2}
          />
        </MotionBox>

        {/* Achievements box */}
        <MotionBox
          w={{ base: '90%', md: '600px' }}
          minH="300px"
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Grid gap={3}>
            {academics.achievements.map((item, index) => (
              <Box
                key={index}
                p={3}
                borderRadius="8px"
                bgColor="transparent"
                _hover={{ bg: "#dfe6f3" }}
              >
                <Text
                  color="#000"
                  fontFamily="'Orbitron', sans-serif"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {item}
                </Text>
              </Box>
            ))}
          </Grid>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Academics;
