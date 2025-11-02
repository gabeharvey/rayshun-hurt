import { Box, VStack, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Media() {
  const mediaArticles = [
    {
      title: "Rayshun Hurt Fuels Comeback in Stone Oak Super Bowl",
      url: "https://www.expressnews.com/sports/high-school/article/football-johnson-reagan-comeback-overtime-score-21089436.php",
    },
    {
      title: "Sports Illustrated Texas Offensive POW Nominees",
      url: "https://www.si.com/high-school/texas/vote-who-should-be-texas-offensive-high-school-football-player-of-the-week-10-13-2025",
    },
  ];

  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="2xl" fontWeight="medium" color="#4682B4" fontFamily="'Russo One', sans-serif" mb="5">
        Media Coverage
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        {mediaArticles.map((article, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="120px"
            m="5"
            bgColor="#ebebeb"
            borderRadius="12px"
            borderWidth="4px"
            borderColor="#4682B4"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Link
              href={article.url}
              isExternal
              color="#000000"
              fontWeight="bold"
              fontSize="lg" 
              p={3} 
              _hover={{ color: '#CFB53B', textDecoration: 'underline' }}
            >
              {article.title}
            </Link>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Media;