import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { BrightnessHigh, Brightness4, GitHub, LinkedIn, MoreVert } from '@material-ui/icons';
import { BrowserView, MobileView } from 'react-device-detect';
import { Menu, MenuItem, ListItemIcon, ListItemText, Link, MenuProps, withStyles, ListItem, Grow, Fade } from '@material-ui/core';

interface HomeAppBarProps {
  isDarkMode: boolean;
  toggleDark: Function;
}

interface MenuItem {
  name: string;
  icon: ReactElement;
  link: string;
}

const links: MenuItem[] = [
  { name: "GitHub", icon: <GitHub color="primary"/>, link: "https://github.com/tylerbwong" }, 
  { name: "LinkedIn", icon: <LinkedIn color="primary"/>, link: "https://linkedin.com/in/tylerbwong"} 
]

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

export default function HomeAppBar(props: HomeAppBarProps) {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Fade in={true} timeout={2000}>
      <div className={classes.root}>
        <AppBar color="inherit" elevation={0} position="static">
          <Toolbar>
            <Typography color="inherit" className={classes.title} variant="h5">
              <Link underline="none" href="/">
                <b>Tyler Wong</b>
              </Link>
            </Typography>
            {props.isDarkMode ? <BrightnessHigh /> : <Brightness4 />}
            <Switch checked={props.isDarkMode} onChange={() => props.toggleDark()} aria-label="login switch" />
            <BrowserView>
              {
                links.map((menuItem: MenuItem, index: number) =>
                  <IconButton color="inherit" href={menuItem.link} key={index}>
                    {menuItem.icon}
                  </IconButton>
                )
              }
            </BrowserView>
            <MobileView>
              <IconButton color="inherit" onClick={handleClick}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={handleClose}
              >
                {
                links.map((menuItem: MenuItem, index: number) =>
                  <MenuItem
                    button
                    component="a"
                    href={menuItem.link}
                    onClick={handleClose}
                    key={index}
                  >
                    <ListItemIcon color="inherit">
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={menuItem.name} />
                  </MenuItem>
                )
              }
              </Menu>
            </MobileView>
          </Toolbar>
        </AppBar>
      </div>
    </Fade>
  );
}