import { Box, VStack, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Ask() {
  return (
    <VStack spacing={10} p={6} mt={12}>
      <Heading
        fontSize="2xl"
        fontWeight="medium"
        color="#4682B4"
        fontFamily="'Russo One', sans-serif"
        mb="5"
      >
        Ask Rayshun
      </Heading>

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <MotionBox
          w={{ base: '90%', md: '800px' }}
          h={{ base: '250px', md: '450px' }}
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          overflow="hidden"
          position="relative"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Decorative subtle pattern background */}
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

          {/* Optional watermark background (same style as PlayerProfile) */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="url('/johnson-logo.png')"
            bgRepeat="repeat"
            bgSize="200px 200px"
            opacity="0.1"
            filter="grayscale(100%) contrast(120%) brightness(80%)"
            transform="rotate(-10deg)"
            zIndex={1}
          />

          {/* Embedded video */}
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/your-video-id" // Replace this with your actual video link
            allowFullScreen
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            border="none"
            zIndex={3}
          />
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Ask;
