import { Box, Flex, Spacer, Avatar, Text } from "@chakra-ui/react"
import { FaBath, FaBed } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import millify from "millify"

import { baseURL, fetchApi } from "../../utils/fetchApi"
import ImageScrollbar from "../../components/ImageScrollbar"

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, ageency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}
        </Box>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseURL}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        }
    }
}

export default PropertyDetails

