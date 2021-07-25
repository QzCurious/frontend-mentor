import { Box, Flex, Link, SimpleGrid } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"
import StatsPreviewCardComponentThumbnail from "../StatsPreviewCardComponent/StatsPreviewCardComponentThumbnail"

const Gallery = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      minH="100vh"
      bgColor="gray.50"
      p="8"
      pb="0"
    >
      <SimpleGrid columns={[1, null, 2, null, 3]} spacing={6}>
        <Link as={ReactLink} to="/stats-preview-card-component">
          <StatsPreviewCardComponentThumbnail />
        </Link>
      </SimpleGrid>
      <Box mt="auto">
        Challenge by{" "}
        <Link isExternal href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link isExternal href="https://github.com/QzCurious/frontend-mentor">
          QzCurious
        </Link>
        .
      </Box>
    </Flex>
  )
}

export default Gallery
