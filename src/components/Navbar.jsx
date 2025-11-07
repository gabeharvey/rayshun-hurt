import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import '../App.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const menuRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1240);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCloseIcon(true), 200);
    } else {
      setShowCloseIcon(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: { opacity: 0, x: '100%' },
  };

  const menuItems = [
    'PLAYER BIO',
    'RECORDS',
    'ACADEMICS',
    'FOOTBALL REELS',
    'PLAYER CARDS',
    'ASK',
    'MEDIA',
    'OFFERS',
    'CONTACT',
  ];

  return (
    <Box
      bgColor="#4682B4"
      borderBottomRadius="12px"
      py="2.5rem"
      px="2rem"
      position="relative"
      boxShadow="lg"
      mb="10px"
      fontFamily="'Russo One', sans-serif"
      overflow="hidden"
    >
      {/* --- Background overlays --- */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        overflow="hidden"
      >
        {/* Motion lines overlay (both directions) */}
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
        {/* Centered logo watermark */}
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
          opacity={0.08}
          filter="contrast(120%) brightness(70%)"
        />
      </Box>

      {/* --- Main Navbar Content --- */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
        position="relative"
        zIndex={1}
      >
        <Flex
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'flex-start' : 'center'}
        >
          <Heading
            as={ScrollLink}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            fontSize={{ base: 'xl', md: '2xl' }}
            fontFamily="'Russo One', sans-serif"
            color="#F5F5F5"
            letterSpacing="wider"
            mb={isMobile ? 2 : 0}
            style={{ cursor: 'pointer' }}
          >
            Rayshun Hurt #6
          </Heading>
        </Flex>

        <Spacer />

        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={
            showCloseIcon ? (
              <motion.div
                whileHover={{ scale: 1.2, color: '#F5F5F5' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                style={{ color: '#F5F5F5' }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.2, color: '#F5F5F5' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                style={{ color: '#F5F5F5' }}
              >
                <FaBars />
              </motion.div>
            )
          }
          display={isMobile ? 'block' : 'none'}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          fontSize="30px"
          _focus={{ boxShadow: 'none' }}
          mt="20px"
          mb="20px"
        />

        {/* Desktop Menu */}
        <Flex
          as="ul"
          display={isMobile ? 'none' : 'flex'}
          listStyleType="none"
          ml="auto"
          alignItems="center"
          gap="2rem"
          flex="1"
          justifyContent="space-evenly"
          whiteSpace="nowrap"
        >
          {menuItems.map((text, index) => (
            <ChakraLink
              key={index}
              as={ScrollLink}
              to={text.replace(' ', '-').toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              fontSize="lg"
              fontWeight="extrabold"
              color="#F5F5F5"
              position="relative"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#CFB53B' }}
              style={{ cursor: 'pointer' }}
            >
              {text}
            </ChakraLink>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Slide-Out Menu */}
{isOpen && (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={menuVariants}
    style={{
      position: 'fixed',   // full viewport
      top: 0,
      right: 0,
      width: '70%',
      height: '100vh',
      zIndex: 2000,
    }}
  >
    <Box
      ref={menuRef}
      position="relative"
      bgColor="#4682B4"
      p="1rem"
      borderTopLeftRadius="30px"
      borderBottomLeftRadius="30px"
      color="#F5F5F5"
      height="100%"
      boxShadow="0 0 20px rgba(0,0,0,0.9)"
      overflow="auto"
    >
      {/* Diagonal grid overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="repeating-linear-gradient(
          45deg,
          rgba(255,255,255,0.05) 0px,
          rgba(255,255,255,0.05) 2px,
          transparent 2px,
          transparent 10px
        ), repeating-linear-gradient(
          -45deg,
          rgba(255,255,255,0.05) 0px,
          rgba(255,255,255,0.05) 2px,
          transparent 2px,
          transparent 10px
        )"
        zIndex={0}
        pointerEvents="none"
      />

      <Flex alignItems="center" justifyContent="space-between" mb="1rem" position="relative" zIndex={1}>
        <Text fontSize="2xl" ml="20px" fontWeight="extrabold">
          MENU
        </Text>
        <IconButton
          icon={<CloseIcon w={6} h={6} />}
          color="#F5F5F5"
          aria-label="Close Menu"
          variant="outline"
          onClick={onClose}
          bgColor="transparent"
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: 'transparent' }}
          size="lg"
          fontWeight="bold"
          borderColor="transparent"
        />
      </Flex>

      <Flex as="ul" flexDirection="column" alignItems="flex-start" gap="1rem" mt="1rem" position="relative" zIndex={1}>
        {menuItems.map((text, index) => (
          <ChakraLink
            key={index}
            as={ScrollLink}
            to={text.replace(' ', '-').toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            fontSize="lg"
            fontWeight="extrabold"
            color="#F5F5F5"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: '#CFB53B' }}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </ChakraLink>
        ))}
      </Flex>
    </Box>
  </motion.div>
)}
    </Box>
  );
};

export default Navbar;
