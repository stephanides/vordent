import {
  Button,
  DropdownToggle,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { colors, media } from '../../design';

export const Wrapper = styled.div``;

export const DesktopNav = styled.div`
  display: block;
  border-bottom: 1px solid ${colors.primaryLight};
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    z-index: 999;
    height: 80px;
    border-bottom: 1px solid ${colors.primaryLight};
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-size: 0.875rem;
  color: ${colors.text};
  width: 90px;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    color: ${colors.primary};
    font-weight: bold;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
`;

export const StyledDropdownToggle = styled(DropdownToggle)`
  font-size: 0.875rem;
  color: ${colors.text};
  font-weight: 400;
  width: 90px;
  &:hover {
    color: ${colors.primary};
    font-weight: bold;
  }
`;

export const StyledNav = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
`;

export const RightContent = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-right;
`;

export const NavButton = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 14px 46px;
  border-radius: 25px;
  background-color: ${colors.primary} !important;
  color: ${colors.textInverted};
  border: none;
  &:hover {
    background-color: #f6b03f;
  }
`;

export const StyledNavItem = styled.div`
  z-index: 2;
  text-align: center;
  a {
    text-decoration: none !important;
  }
`;

export const StyledUncontrolledDropdown = styled(UncontrolledDropdown)`
  list-style: none;
  &:hover {
    color: ${colors.primary};
    font-weight: 400;
    a {
      :after {
        border-color: ${colors.primary};
      }
    }
  }
  a {
    :after {
      position: relative;
      top: 2px;
      left: 2px;
      border: solid ${colors.text};
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 2px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
`;

//Mobile

export const MobileNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 20px;
  padding-right: 0;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background: white;
`;

type MobileNavContent = {
  mobileOpen: boolean;
};

export const MobileNavContent = styled.div<MobileNavContent>`
  z-index: 999;
  width: 100%;
  height: calc(100% - 72px);
  position: fixed;
  overflow-y: visible;
  overflow-x: hidden;
  top: 72px;
  transition: all 0.4s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  right: ${({ mobileOpen }) => (mobileOpen ? 0 : '-100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding-top: 60px;
`;

export const MobileNavContentIconHolder = styled.div`
  width: 60px;
  height: 60px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

type MobileNavContentItemProps = {
  ml?: string
}

export const MobileNavContentItem = styled.div<MobileNavContentItemProps>`
  position: relative;
  display: flex;
  padding: 24px 40px;
  color: ${colors.primary};
  text-align: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-weight: 500;
  margin-left: ${({ml}) => ml ? ml : 0};
  &:hover {
    background-color: rgba(0, 95, 166, 0.1);
  }
`;

export const MobileNavSubContentItem = styled.div`
  position: relative;
  font-size: 18px;
  padding: 10px 48px;
  color: ${colors.primary};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: rgba(20, 104, 56, 0.1);
  }
`;

export const MobileNavLink = styled.a`
  position: relative;
  color: ${colors.textInverted};
  font-size: 1.4rem;
  text-decoration: none !important;
  &:hover {
    color: ${colors.textInverted};
  }
`;

export const MobileLogo = styled.img`
  width: 100px;
`;

type ArrowType = {
  isOpen: boolean;
};

export const ArrowHolder = styled.div<ArrowType>`
  display: flex;
  top: 2px;
  margin-left: 6px;
  position: relative;
  svg {
    transition: transform 0.3s ease-out !important;
    transform: ${({ isOpen }) => (isOpen ? 'rotateX(0)' : 'rotateX(180deg)')};
  }
`;

export const BottomContent = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const BottomLinks = styled.div`
  display: flex;
  a {
    background-color: ${colors.primary};
    width: 100%;
    text-align: center;
    color: white;
    font-size: 0.85rem;
    padding: 12px 0;
  }
`;

export const Arrow = styled(ExpandLessIcon)`
  color: ${colors.primary};
  width: 30px !important;
  height: 30px !important;
`;
