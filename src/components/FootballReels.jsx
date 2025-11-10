/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#4682B4"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#4682B4"
        bgImage="linear-gradient(-45deg, #4682B4 25%, transparent 25%, transparent 50%, #4682B4 50%, #4682B4 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="lg" fontWeight="semibold" color="#000000" fontFamily="'Russo One', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#000000" fontFamily="'Orbitron', sans-serif">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function FootballReels() {
  const videos = [
    {
      videoSrc: "rayshun-vid-1.MOV",
      title: "Rayshun Breaking LOS",
      description: "Elusive burst through the line - gone for six.",
    },
    {
      videoSrc: "rayshun-vid-2.MOV",
      title: "TD Run After Contact",
      description: "Elusiveness, speed, and power on display.",
    },
    {
      videoSrc: "rayshun-vid-3.MOV",
      title: "Power on Display",
      description: "Overpowering Defender for TD.",
    },
    {
      videoSrc: "rayshun-vid-4.MOV",
      title: "Rayshun Highlights",
      description: "A rare blend of shiftiness, power, and burst.",
    },
    {
      videoSrc: "rayshun-vid-5.MOV",
      title: "Compact Power",
      description: "Johnson High's Playmaker",
    },
    // {
    //   videoSrc: "rayshun-route.MOV",
    //   title: "Crisp Route Running",
    //   description: "Footwork precision. Wideout excellence.",
    // },
    // {
    //   videoSrc: "rayshun-track.MOV",
    //   title: "Track Meet Highlights",
    //   description: "Pure speed. Championship mentality.",
    // },
    // {
    //   videoSrc: "rayshun-allstar.MOV",
    //   title: "All-Star Game Highlights",
    //   description: "Proving why he’s one of Texas’ finest.",
    // },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/football-bg.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text
        fontSize="2xl"
        fontWeight="medium"
        color="#4682B4"
        fontFamily="'Russo One', sans-serif"
        textAlign="center"
      >
        Rayshun Hurt — Star RB / WR / Track Athlete <br /> Johnson High School 🏈
      </Text>

      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default FootballReels;
