import {
  AppBar,
  createStyles,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../design';
import { useAuth } from '../../hooks';
import { Navigation } from './Navigation';

const StyledIconCircle = styled(AccountCircle)`
  width: 32px !important;
  height: 32px !important;
  color: ${colors.primary};
`;

const StyledAppBar = styled(AppBar)`
  background-color: white !important;
  @media (min-width: 576px) {
    width: calc(100% - 240px) !important;
    margin-left: 240px;
  }
`;

const Content = styled.div`
  @media (min-width: 576px) {
    width: calc(100% - 272px) !important;
    min-height: calc(100vh - 64px);
    background-color: rgba(0, 95, 166, 0.1);
    border-radius: 15px;
    padding: 16px;
    margin: 16px;
    margin-top: 0;
    margin-left: 256px;
  }
`;

const DrawerNav = styled.nav`
  @media (min-width: 576px) {
    width: 254px;
    flex-shrink: 0;
  }
`;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 576px) {
    display: none !important;
  }
`;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: '16px',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      width: '254px',
      border: 'none',
      padding: '0 8px',
    },
  })
);

type AdminLayoutProps = {
  title?: string;
  children?: ReactNode;
  window?: () => Window;
};

export const AdminLayout: FC<AdminLayoutProps> = (props) => {
  const { children, title = 'Administrácia', window } = props;
  const { signOut } = useAuth();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <StyledMenuButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledMenuButton>

          <div style={{ marginLeft: 'auto' }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <StyledIconCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              keepMounted
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={signOut}>Odhásiť sa</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </StyledAppBar>
      <DrawerNav aria-label="admin menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Navigation />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Navigation />
          </Drawer>
        </Hidden>
      </DrawerNav>
      <Content>{props.children}</Content>
    </div>
  );
};
