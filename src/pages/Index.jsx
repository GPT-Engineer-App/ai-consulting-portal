import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </Flex>
    </Container>
  );
};

const Header = () => {
  return (
    <Flex as="header" w="full" py={5} justify="space-between" align="center">
      <Image src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTcxNDI5MjI3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" boxSize="50px" />
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button colorScheme="teal" variant="ghost">
          About
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Services
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Contact
        </Button>
      </Stack>
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <VStack spacing={10} py={10} textAlign="center">
      <Heading as="h1" size="2xl">
        Innovate with AI
      </Heading>
      <Text fontSize="xl">Leading the future with AI consulting and cutting-edge AI products.</Text>
      <Button leftIcon={<FaRobot />} colorScheme="teal" size="lg">
        Explore Our Solutions
      </Button>
    </VStack>
  );
};

const FeaturesSection = () => {
  return (
    <Box py={10}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl">
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
          <ServiceCard icon={<FaBrain />} title="AI Consulting" description="Expert guidance to integrate AI into your business processes effectively." />
          <ServiceCard icon={<FaRobot />} title="AI Products" description="Innovative AI products designed to streamline operations and enhance decision-making." />
        </Flex>
      </VStack>
    </Box>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <VStack spacing={4} bg="gray.100" p={5} borderRadius="md" boxShadow="md" width={{ base: "80%", md: "40%" }}>
      <Box boxSize="40px" as="span">
        {icon}
      </Box>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

const AboutSection = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} py={10} align="center" justify="space-around">
      <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MjQzOTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" />
      <Box maxW="md">
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text mt={4}>With over a decade of experience in AI, we provide top-tier consulting services and develop advanced AI products that cater to various industries including healthcare, finance, and retail.</Text>
      </Box>
    </Flex>
  );
};

const ContactSection = () => {
  return (
    <VStack spacing={5} py={10} textAlign="center">
      <Heading as="h2" size="xl">
        Get in Touch
      </Heading>
      <Text>Contact us to see how our AI solutions can help your business.</Text>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<FaPhoneAlt />} colorScheme="teal">
          Call Us
        </Button>
        <Button leftIcon={<FaEnvelope />} colorScheme="teal">
          Email Us
        </Button>
      </Stack>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Flex as="footer" py={5} mt={10} justify="center" bg="gray.200">
      <Stack direction="row" spacing={6}>
        <Link href="#" isExternal>
          <FaLinkedin />
        </Link>
        <Link href="#" isExternal>
          <FaTwitter />
        </Link>
        <Link href="#" isExternal>
          <FaFacebookSquare />
        </Link>
      </Stack>
    </Flex>
  );
};

export default Index;
