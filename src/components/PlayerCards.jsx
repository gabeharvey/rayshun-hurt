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
            borderColor="#4682B4"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          />
        </Box>

        {/* BACK SIDE */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#4682B4"
          borderWidth="3px"
          style={{ backfaceVisibility: 'hidden' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 20px rgba(0,0,0,0.8), inset 0 0 15px rgba(255,255,255,0.05)"
          transform="rotateY(180deg)"
          bgGradient="linear(to-tr, #0d0d0d, #1a1a1a, #000000)"
          p={5}
          overflow="hidden"
        >
          {/* Dynamic motion lines overlay */}
          <Box
            position="absolute"
            w="150%"
            h="150%"
            top="-25%"
            left="-25%"
            bgImage="repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 2px,
              transparent 2px,
              transparent 10px
            )"
            transform="rotate(0deg)"
            pointerEvents="none"
          />

          <Box
            position="absolute"
            w="150%"
            h="150%"
            top="-25%"
            left="-25%"
            bgImage="repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 2px,
              transparent 2px,
              transparent 10px
            )"
            transform="rotate(0deg)"
            pointerEvents="none"
          />

          {/* Centered Logo */}
          <Box
            w="80px"
            h="80px"
            mb={4}
            bgImage="url('/johnson-logo.png')" // replace with your logo
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPosition="center"
            zIndex={1}
          />

          {/* Player Bio */}
          <Text
            color="#FFFFFF"
            fontFamily="'Russo One', sans-serif"
            fontSize="lg"
            fontWeight="medium"
            textAlign="center"
            textShadow="1px 1px 3px rgba(0,0,0,0.8)"
            zIndex={1}
          >
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
      frontImg: "rayshun-1.JPG",
      name: "Rayshun Hurt",
      bio: "Rayshun Hurt is a dominant RB with explosive acceleration and elite field vision, turning every carry into a home-run threat.",
    },
    {
      frontImg: "rayshun-2.JPG",
      name: "Rayshun Hurt",
      bio: "Shiftiness, compact, power, explosiveness, and blazing speed are a few words that describe Rayshun's game.",
    },
    {
      frontImg: "rayshun-3.PNG",
      name: "Rayshun Hurt",
      bio: "On the track, Rayshun’s top-end speed sets him apart — a dual-sport athlete who brings sprinter speed to the gridiron.",
    },
    // {
    //   frontImg: "rayshun-hurt.JPG",
    //   name: "Rayshun Hurt",
    //   bio: "Rayshun’s agility and balance make him nearly impossible to tackle in open space — pure highlight reel material.",
    // },
    // {
    //   frontImg: "rayshun-hurt.JPG",
    //   name: "Rayshun Hurt",
    //   bio: "In clutch moments, Rayshun thrives — a leader who elevates his team with every snap.",
    // },
    // {
    //   frontImg: "rayshun-hurt.JPG",
    //   name: "Rayshun Hurt",
    //   bio: "From the backfield or out wide, Rayshun delivers — versatility that defines modern football excellence.",
    // },
    // {
    //   frontImg: "rayshun-hurt.JPG",
    //   name: "Rayshun Hurt",
    //   bio: "Rayshun combines football IQ, toughness, and explosive speed — the complete offensive weapon.",
    // },
    // {
    //   frontImg: "rayshun-hurt.JPG",
    //   name: "Rayshun Hurt",
    //   bio: "Johnson High’s premier playmaker — a relentless competitor destined for greatness.",
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
      bgSize="contain"
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
        Rayshun Hurt — RB / WR / Track Star
      </Text>
      <Text
        fontSize="md"
        fontWeight="medium"
        color="#4682B4"
        fontFamily="'Russo One', sans-serif"
        textAlign="center"
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
