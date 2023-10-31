import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  MenuItemsListContainer,
  MenuItemContainer,
  MenuItemName,
  NavLink,
} from './styledComponents'

const NavigationList = () => (
  <MenuItemsListContainer>
    <NavLink to="/">
      <MenuItemContainer>
        <AiFillHome size="18" color="#ff0000" />
        <MenuItemName>Home</MenuItemName>
      </MenuItemContainer>
    </NavLink>

    <NavLink to="/trending">
      <MenuItemContainer>
        <HiFire size="18" />
        <MenuItemName>Trending</MenuItemName>
      </MenuItemContainer>
    </NavLink>

    <NavLink to="/gaming">
      <MenuItemContainer>
        <SiYoutubegaming size="18" />
        <MenuItemName>Gaming</MenuItemName>
      </MenuItemContainer>
    </NavLink>

    <NavLink to="/saved-videos">
      <MenuItemContainer>
        <BiListPlus size="20" />
        <MenuItemName>Saved videos</MenuItemName>
      </MenuItemContainer>
    </NavLink>
  </MenuItemsListContainer>
)
export default NavigationList
