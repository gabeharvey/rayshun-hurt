import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Contact() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={16}
    >
      <Heading fontSize="2xl" fontWeight="medium" color="#004B23" fontFamily="'Atomic Age', sans-serif">
        Contact Rayshun
      </Heading>
      
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#ebebeb"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#004B23"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Grid gap={4}>
          <FormControl id="name">
            <FormLabel color="#004B23" fontFamily="'Atomic Age', sans-serif">
              Name
            </FormLabel>
            <Input
              placeholder="Your Name"
              bgColor="#F8F8F8"
              color="#38383d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="#004B23" fontFamily="'Atomic Age', sans-serif">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              bgColor="#F8F8F8"
              color="#38383d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="#004B23" fontFamily="'Atomic Age', sans-serif">
              Message
            </FormLabel>
            <Textarea
              placeholder="Your Message"
              bgColor="#F8F8F8"
              color="#38383d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#004B23"
            color="#F8F8F8"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Atomic Age', sans-serif"
            fontWeight="medium"
            fontSize="md"
            borderRadius="8px"
            borderColor="#004B23"
            borderWidth="3px"
            _hover={{ borderColor: '#F8F8F8' }}
          >
            Submit
          </Button>
        </Grid>
      </MotionBox>
    </VStack>
  );
}

export default Contact;