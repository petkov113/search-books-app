import { FC, ReactElement } from 'react'
import { Circle, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const linkHoverStyles = { backgroundColor: 'teal.500', transition: 'all .2s' }

type LinkIconProps = { to: string; icon: ReactElement }

const LinkIcon: FC<LinkIconProps> = ({ to, icon }) => {
  return (
    <Tooltip
      label="Discover"
      fontSize="md"
      placement="right"
      bg="teal"
      hasArrow
    >
      <Link to={to}>
        <Circle
          size="40px"
          bg="teal.700"
          color="white"
          _hover={linkHoverStyles}
        >
          {icon}
        </Circle>
      </Link>
    </Tooltip>
  )
}

export default LinkIcon
