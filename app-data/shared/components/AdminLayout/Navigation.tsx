import React, { FunctionComponent, ComponentClass } from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Icons
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { Paragraph, colors } from '../../design';

const ToolbarDrawer = styled.div`
  background: #fff;
  min-height: 36px;
  position: relative;
  border: none;
  background-color: white;
  @media (min-width: 0px) {
    min-height: 24px;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  }
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: -46px;
  left: 16px;
  svg {
    width: 100px;
  }
`;

const StyledList = styled(List)`
  height: 100%;
  padding-top: 32px !important;
  margin-top: 16px !important;
`;

const StyledListItemText = styled(Paragraph)`
  margin: 0;
  color: ${colors.text};
`;

const StyledListItem = styled(ListItem)`
  border-radius: 15px !important;
  padding: 12px 16px !important;
  &:hover {
    background-color: rgba(0, 95, 166, 0.1) !important;
  }
`;

const menuItems1 = [
  {
    href: '/admin/pouzivatelia',
    title: 'Používatelia',
    iconComponent: GroupOutlinedIcon,
  },
  {
    href: '/admin/blog',
    title: 'Blog',
    iconComponent: MenuBookIcon,
  },
];

export const Navigation: (props: { role?: number }) => JSX.Element = ({
  role,
}) => {
  const listMenuItems1 = getListMenuItems(menuItems1);

  return (
    <>
      <ToolbarDrawer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </ToolbarDrawer>
      <StyledList>{listMenuItems1}</StyledList>
    </>
  );
};

function getListMenuItems(
  data: {
    href: string;
    title: string;
    iconComponent: string | FunctionComponent<{}> | ComponentClass<{}, any>;
  }[]
): JSX.Element[] {
  return data.map((item, i) => (
    <Link href={item.href} key={i}>
      <StyledListItem button>
        <ListItemIcon>
          {React.createElement(item.iconComponent, {})}
        </ListItemIcon>
        <StyledListItemText>{item.title}</StyledListItemText>
      </StyledListItem>
    </Link>
  ));
}
