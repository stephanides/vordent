import { useRouter } from 'next/router';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import {
  DesktopNav,
  MobileNav,
  MobileNavContent,
  MobileNavContentIconHolder,
  MobileNavWrapper,
  NavWrapper,
  RightContent,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
} from './style';
import Link from 'next/link';
import { Logo } from '../Logo';
import { ArrowDown, colors, PrimaryButton } from '../../design';
import { Dropdown, DropdownItem } from './Dropdown';
import { CustomContainer } from '../CustomContainer';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const router = useRouter();

  const activeTab = router.pathname;

  const toggleMobile = () => setIsOpen(!isOpen);

  const toggleAbout = () => setCollapse(!collapse);

  const isServices = (): boolean =>
    activeTab.includes('zubne-implantaty') ||
    activeTab.includes('proteticka-stomatologia') ||
    activeTab.includes('stomatologicka-chirurgia') ||
    activeTab.includes('zachovna-stomatologia') ||
    activeTab.includes('dentalna-hygiena') ||
    activeTab.includes('bielenie-zubov');

  const isAboutUs = (): boolean => activeTab.includes('o-nas');

  return (
    <>
      <DesktopNav>
        <CustomContainer>
          <NavWrapper>
            <Link href="/">
              <div style={{ zIndex: '9' }}>
                <Logo />
              </div>
            </Link>
            <StyledNav>
              <StyledNavItem>
                <Dropdown title="Služby">
                  <DropdownItem
                    title="Zubné implantáty"
                    url="/zubne-implantaty"
                  />
                  <DropdownItem
                    title="Protetická stomatológia"
                    url="/proteticka-stomatologia"
                  />
                  <DropdownItem
                    title="Stomatologická chirurgia"
                    url="/stomatologicka-chirurgia"
                  />
                </Dropdown>
              </StyledNavItem>
              <StyledNavItem>
                <Dropdown title="O nás">
                  <DropdownItem title="O nás" url="/o-nas" />
                </Dropdown>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/cennik">
                  <StyledNavLink
                    className={
                      activeTab.includes('cennik') && 'active-nav-link'
                    }
                  >
                    Cenník
                  </StyledNavLink>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/blog">
                  <StyledNavLink
                    className={activeTab.includes('blog') && 'active-nav-link'}
                  >
                    Blog
                  </StyledNavLink>
                </Link>
              </StyledNavItem>
              <StyledNavItem>
                <Link href="/kontakt">
                  <StyledNavLink
                    className={
                      activeTab.includes('kontakt') && 'active-nav-link'
                    }
                  >
                    Kontakt
                  </StyledNavLink>
                </Link>
              </StyledNavItem>
            </StyledNav>
            <RightContent>
              <Link href="/kontakt">
                <PrimaryButton>Objednať sa</PrimaryButton>
              </Link>
            </RightContent>
          </NavWrapper>
        </CustomContainer>
      </DesktopNav>
      <MobileNav>
        <MobileNavWrapper>
          <Link href="/">
            <Logo />
          </Link>
          <MobileNavContentIconHolder>
            <Hamburger
              toggle={toggleMobile}
              color={colors.primary}
              toggled={isOpen}
              size={28}
            />
          </MobileNavContentIconHolder>

          <MobileNavContent mobileOpen={isOpen}></MobileNavContent>
        </MobileNavWrapper>
      </MobileNav>
    </>
  );
};
