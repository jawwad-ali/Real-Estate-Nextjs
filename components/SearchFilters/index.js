import { useState, useEffect } from "react"
import { Select, Flex, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MdCancel } from "react-icons/md"
import Image from "next/image"
import { filterData, getFilterValues } from "../../utils/filterData"

function SearchFilters() {
    const [filters, setFilters] = useState(filterData)
    const router = useRouter()

    // Filter Function
    const searchProperties = (filterValues) => {
        const path = router.pathname
        const { query } = router

        const values = getFilterValues(filterValues)

        // setting the values for filterItem
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value

            }
        })
        router.push({ pathname: path, query: query })
    }

    return (
        <Flex bg="gray.100" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        w="fit-content"
                        p="2"
                        placeholder={filter.placeholder}
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                        {
                            filter?.items?.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.value}
                                </option>
                            ))
                        }
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters
