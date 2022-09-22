import { useRouter } from 'next/router';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import {
  Arrow,
  ArrowHolder,
  BottomContent,
  DesktopNav,
  MobileNav,
  MobileNavContent,
  MobileNavContentIconHolder,
  MobileNavContentItem,
  MobileNavLink,
  MobileNavSubContentItem,
  MobileNavWrapper,
  NavButton,
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
  const [servicesCollapse, setServicesCollapse] = useState(false);
  const [aboutUsCollapse, setAboutUsCollapse] = useState(false);
  const router = useRouter();

  const activeTab = router.pathname;

  const toggleMobile = () => setIsOpen(!isOpen);

  const toggleServices = () => setServicesCollapse(!servicesCollapse);
  const toggleAboutUs = () => setAboutUsCollapse(!aboutUsCollapse);

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
                    url="/sluzby/zubne-implantaty"
                  />
                  <DropdownItem
                    title="Protetická stomatológia"
                    url="/sluzby/proteticka-stomatologia"
                  />
                  <DropdownItem
                    title="Stomatologická chirurgia"
                    url="/sluzby/stomatologicka-chirurgia"
                  />
                  <DropdownItem
                    title="Záchovná stomatológia"
                    url="/sluzby/zachovna-stomatologia"
                  />
                  <DropdownItem
                    title="Dentálna hygiena"
                    url="/sluzby/dentalna-hygiena"
                  />
                  <DropdownItem
                    title="Bielenie zubov"
                    url="/sluzby/bielenie-zubov"
                  />
                </Dropdown>
              </StyledNavItem>
              <StyledNavItem>
                <Dropdown title="O nás">
                  <DropdownItem title="Náš tím" url="/nas-tim" />
                  <DropdownItem
                    title="Vybavenie ambulancií"
                    url="/vybavenie-ambulancii"
                  />
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
            <div>
              <Logo />
            </div>
          </Link>
          <MobileNavContentIconHolder>
            <Hamburger
              toggle={toggleMobile}
              color={colors.primary}
              toggled={isOpen}
              size={28}
            />
          </MobileNavContentIconHolder>
          <MobileNavContent mobileOpen={isOpen}>
            <div>
              <MobileNavLink onClick={toggleServices}>
                <MobileNavContentItem ml='8px'>
                  Služby
                  <ArrowHolder isOpen={servicesCollapse}>
                    <Arrow />
                  </ArrowHolder>
                </MobileNavContentItem>
              </MobileNavLink>
              <Collapse isOpen={servicesCollapse}>
                <Link href="/sluzby/zubne-implantaty">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Zubné implantáty
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/sluzby/proteticka-stomatologia">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Protetická stomatológia
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/sluzby/stomatologicka-chirurgia">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Stomatologická chirurgia
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/sluzby/zachovna-stomatologia">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Záchovná stomatológia
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/sluzby/dentalna-hygiena">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Dentálna hygiena
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/sluzby/bielenie-zubov">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Bielenie zubov
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
              </Collapse>
              <MobileNavLink onClick={toggleAboutUs}>
                <MobileNavContentItem ml='8px'>
                  O nás
                  <ArrowHolder isOpen={aboutUsCollapse}>
                    <Arrow />
                  </ArrowHolder>
                </MobileNavContentItem>
              </MobileNavLink>
              <Collapse isOpen={aboutUsCollapse}>
                <Link href="/nas-tim">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Náš tím
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
                <Link href="/vybavenie-ambulancii">
                  <MobileNavLink color="sublink">
                    <MobileNavSubContentItem>
                      Vybavenie ambulancií
                    </MobileNavSubContentItem>
                  </MobileNavLink>
                </Link>
              </Collapse>
              <Link href="/cennik">
                <MobileNavLink>
                  <MobileNavContentItem>Cenník</MobileNavContentItem>
                </MobileNavLink>
              </Link>
              <Link href="/blog">
                <MobileNavLink>
                  <MobileNavContentItem>Blog</MobileNavContentItem>
                </MobileNavLink>
              </Link>
              <Link href="/kontakt">
                <MobileNavLink>
                  <MobileNavContentItem>Kontakt</MobileNavContentItem>
                </MobileNavLink>
              </Link>
              <Link href="/kontakt">
                <MobileNavContentItem>
                  <NavButton>Objednať sa</NavButton>
                </MobileNavContentItem>
              </Link>
            </div>
          </MobileNavContent>
        </MobileNavWrapper>
      </MobileNav>
    </>
  );
};
