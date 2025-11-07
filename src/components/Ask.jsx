import { Box, VStack, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Ask() {
  const ask = {
    title: "Ask Rayshun",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // Replace with your YouTube embed link
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
        {ask.title}
      </Heading>

      <Flex direction="column" alignItems="center" justifyContent="center" flexWrap="wrap">
        {/* Outer styled MotionBox */}
        <MotionBox
          w={{ base: '90%', md: '600px' }}
          minH={{ base: '220px', sm: '280px', md: '338px' }} // guarantees height on mobile
          bgColor="#ebebeb"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#4682B4"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          overflow="hidden"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Paper texture */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, #f8f9fb, #eceff3)"
            bgImage="url('data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%2710%27><circle cx=%275%27 cy=%275%27 r=%270.3%27 fill=%27%23dcdcdc%27/></svg>')"
            bgRepeat="repeat"
            bgSize="15px 15px"
            zIndex={0}
          />

          {/* Watermark */}
          <Box
            position="absolute"
            inset="0"
            bgImage="url('/johnson-logo.png')"
            bgRepeat="repeat"
            bgSize="160px 160px"
            transform="rotate(-10deg)"
            opacity="0.1"
            filter="grayscale(100%) contrast(110%) brightness(85%)"
            zIndex={1}
          />

          {/* Responsive video iframe */}
          <Box
            as="iframe"
            src={ask.videoUrl}
            title="Player Video"
            allowFullScreen
            width="100%"
            height="100%"
            border="0"
            zIndex={2}
            style={{ minHeight: '220px', aspectRatio: '16/9' }}
          />
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Ask;
