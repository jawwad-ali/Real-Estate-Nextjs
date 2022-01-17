import { Link } from "next/link"
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react"
import { FcMenu, FcHome, FcAbout } from "react-icons/fc"
import { bsSearch } from "react-icons/bs-search"
import { FiKey } from "react-icons/fi"

const Navbar = () => {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box fontSize="3xl" color="blue.400" fontWeight="400">
                <Link href="/" paddingLeft="2"></Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar
