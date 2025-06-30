import { Badge, CloseButton } from '@chakra-ui/react'
import React from 'react'
import "../Styles.css"

const UserBadgeItem = ({user, handleFunction, admin}) => {
  return (

    
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      display="flex"
    >
      <p>
        {user.name}
      {admin === user._id && <span> (Admin)</span>}
      </p>
      
      <CloseButton size="10px" pl={1} fontSize={8} />
    </Badge>
  )
}

export default UserBadgeItem
