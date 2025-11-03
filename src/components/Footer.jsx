import { Flex, Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      borderTopRadius="12px"
      mt="2rem"
      py="1.5rem"
      fontFamily="'Russo One', sans-serif"
      bgColor="#4682B4"
      color="#F5F5F5"
      boxShadow="0 -5px 15px rgba(0,0,0,0.5)"
    >
      {/* --- Background Overlay (motion lines + logo watermark) --- */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        overflow="hidden"
      >
        {/* Motion lines overlay */}
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
        />
        {/* Centered watermark logo */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="140px"
          h="140px"
          bgImage="url('/johnson-logo.png')"
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPosition="center"
          opacity={0.1}
          filter="contrast(120%) brightness(70%)"
        />
      </Box>

      {/* --- Footer Content --- */}
      <Box position="relative" zIndex={1}>
        <Flex
          justify="space-between"
          direction={['column', 'row']}
          alignItems="center"
          gap="1rem"
          mt="1"
          px="2rem" // ✅ Added horizontal padding
        >
          <Box mx="0.5rem">©2025 Rayshun Hurt</Box>
          <Flex alignItems="center" justifyContent="center" mx="0.5rem">
            <a
              href="https://athletexelite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-prism-footer"
            >
              Athlete X Elite
            </a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
