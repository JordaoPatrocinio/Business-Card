import React, { useState } from 'react';
import { AppBar, Toolbar, Typography,IconButton, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { name: 'Cases', link: '/cases' },
    { name: 'Produtos', link: '/produtos' },
  ];

  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', padding: '0' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Clube do Empresário</Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button href="/cases">Cases</Button>
            <Button href="/produtos">Produtos</Button>
            <Button href="/sobre-nos">Sobre Nós</Button>
            <Button href="/login" variant="outlined">Entrar</Button>
            <Button href="/register" variant="contained" color="primary">Cadastrar-se</Button>
          </Box>

          {/* Menu Hamburger para Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' }, border: '1px solid #e49925', borderRadius: '8px' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer para Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login">
                <ListItemText primary="Entrar" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/register">
                <ListItemText primary="Cadastrar-se" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
