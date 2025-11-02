import { Box, Text, VStack, Heading, Grid, Flex, IconButton, Image } from '@chakra-ui/react'; 
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import XLogo from '/x-logo.png';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "rayshun-tr-bg.png",
    secondImg: "basketball-placeholder.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2026" },
      { title: "Position", description: "RB/WR/ATH" },
      { title: "Height", description: "5'10\"" },
      { title: "Weight", description: "185 lbs" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Johnson High School" },
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
        {player.name}
      </Heading>

      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
        <MotionBox
          borderRadius="12px"
          borderWidth="3px"
          borderColor="#ebebeb"
          minH="500px"
          minW="350px"
          m="5"
          position="relative"
          overflow="hidden"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Base white background */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgColor="#ffffff"
            zIndex={0}
          />

          {/* Darker watermark logo behind player */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="url('/johnson-logo.png')"
            bgRepeat="repeat"
            bgSize="140px 140px"
            opacity="0.15"  // ← darkened from 0.07 to 0.15
            filter="grayscale(100%) contrast(120%) brightness(80%)"
            zIndex={1}
          />

          {/* Diagonal shimmer animation */}
          <MotionBox
            position="absolute"
            top="0"
            left="-100%"
            w="200%"
            h="100%"
            bg="linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.0) 100%)"
            zIndex={2}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Radial glow spots */}
          <Box
            position="absolute"
            top="-20%"
            left="-20%"
            w="150%"
            h="150%"
            bgGradient="radial(circle at top left, rgba(255,255,255,0.25), transparent)"
            filter="blur(50px)"
            zIndex={1}
          />
          <Box
            position="absolute"
            bottom="-20%"
            right="-20%"
            w="150%"
            h="150%"
            bgGradient="radial(circle at bottom right, rgba(255,250,255,0.2), transparent)"
            filter="blur(50px)"
            zIndex={1}
          />

          {/* Optional subtle diagonal stripe overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 5px, transparent 5px, transparent 10px)"
            zIndex={2}
          />

          {/* Bottom 10% accent for "sports card" feel */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="10%"
            bgGradient="linear(to-r, #f0f4ff, #e0e8ff)"
            borderTop="1px solid #4682B4"
            zIndex={2}
          />

          {/* Player image (unchanged) */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage={`url(${player.frontImg})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            zIndex={3}
          />
        </MotionBox>

        {/* Bio box */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="700px"
          minW="320px"
          m="5"
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
          <Grid gap={4}>
            {player.bioCategories.map((category, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text
                  color="#000000"
                  fontWeight="bold"
                  fontFamily="'Russo One', sans-serif"
                  fontSize="lg"
                >
                  {category.title}
                </Text>
                <Text
                  color="#000000"
                  fontFamily="'Orbitron', sans-serif"
                  fontSize="lg"
                  fontWeight="semibold"
                  mt={1}
                >
                  {category.description}
                </Text>
              </Box>
            ))}
          </Grid>

          <Flex justifyContent="center" mt={6}>
            <IconButton as={Link} to="https://facebook.com" aria-label="Facebook" icon={<FaFacebookF />} variant="ghost" color="#000000" fontSize="24px" _hover={{ color: '#0056b3' }} _active={{ bg: 'transparent' }} m="1" />
            <IconButton as={Link} to="https://www.instagram.com" aria-label="Instagram" icon={<FaInstagram />} variant="ghost" color="#000000" fontSize="24px" _hover={{ color: '#e1306c' }} _active={{ bg: 'transparent' }} m="1" />
            <IconButton as={Link} to="https://snapchat.com" aria-label="Snapchat" icon={<FaSnapchatGhost />} variant="ghost" color="#000000" fontSize="24px" _hover={{ color: '#fffc00' }} _active={{ bg: 'transparent' }} m="1" />
            <IconButton as={Link} to="https://x.com" aria-label="X" icon={<Image src={XLogo} alt="X Logo" boxSize="24px" />} variant="ghost" color="#000000" _hover={{ color: '#F5F5F5' }} _active={{ bg: 'transparent' }} m="1" />
            <IconButton as={Link} to="https://www.youtube.com" aria-label="YouTube" icon={<FaYoutube />} variant="ghost" color="#000000" fontSize="24px" _hover={{ color: '#c4302b' }} _active={{ bg: 'transparent' }} m="1" />
          </Flex>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
