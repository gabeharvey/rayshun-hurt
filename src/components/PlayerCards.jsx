/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        {/* FRONT SIDE */}
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            borderColor="#004B23"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>

        {/* BACK SIDE */}
        <Box
          bgColor="#2E2E2E"
          bgImage="linear-gradient(-45deg, #444 25%, transparent 25%, transparent 50%, #222 50%, #222 75%, transparent 75%, transparent)"
          bgSize="1px 1px"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#004B23"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          <Text mt={4} color="#F8F8F8" fontFamily="'Atomic Age', sans-serif" fontSize="lg" fontWeight="medium" textAlign="center">
            {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "Rayshun Hurt is a dominant RB with explosive acceleration and elite field vision, turning every carry into a home-run threat. ⚡🏈",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "As a wide receiver, Rayshun shows precise route running and strong hands — a nightmare for defensive backs. 🎯🔥",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "On the track, Rayshun’s top-end speed sets him apart — a dual-sport athlete who brings sprinter speed to the gridiron. 🏃‍♂️💨",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "Rayshun’s agility and balance make him nearly impossible to tackle in open space — pure highlight reel material. 🌀✨",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "In clutch moments, Rayshun thrives — a leader who elevates his team with every snap. 🏆🔥",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "From the backfield or out wide, Rayshun delivers — versatility that defines modern football excellence. 💪💥",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "Rayshun combines football IQ, toughness, and explosive speed — the complete offensive weapon. 🧠⚡",
    },
    {
      frontImg: "rayshun-tr-bg.png",
      name: "Rayshun Hurt",
      bio: "Johnson High’s premier playmaker — a relentless competitor destined for greatness. ⭐🏈",
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/football-bg.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text
        fontSize="2xl"
        fontWeight="medium"
        color="#004B23"
        fontFamily="'Atomic Age', sans-serif"
        textAlign="center"
      >
        Rayshun Hurt — RB / WR / Track Star  
      </Text>
      <Text
        fontSize="md"
        fontWeight="medium"
        color="#004B23"
        fontFamily="'Atomic Age', sans-serif"
      >
        Click on a card to see highlights and details
      </Text>

      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {players.map((player, index) => (
          <Card
            key={index}
            frontImg={player.frontImg}
            name={player.name}
            bio={player.bio}
            flipSound={flipSound}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
