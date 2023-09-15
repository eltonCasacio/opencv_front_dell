import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Insights';
import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getLoggedUser, updateLoggedUser } from '../pages/credentials/usersSlice';
import { useAppSelector } from '../app/hooks';

const pages = [
    { title: 'Pallet', path: '/', level_permission: 1 },
    { title: 'Areas', path: 'areas', level_permission: 1, selected:false },
    { title: 'Box Filters', path: 'box-filters', level_permission: 1, selected:false },
    { title: 'Constant', path: 'constant', level_permission: 1, selected:false },
    { title: 'Users', path: 'users', level_permission: 1, selected:false },
];

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { level_permission } = useAppSelector(getLoggedUser)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function handleLogout() {
        navigate('/')
        dispatch(updateLoggedUser({
            id: 0,
            username: "",
            level_permission: 0
        }))
    }

    function onClickButtonMenu(path:string) {
        navigate(path)
        pages.map(page => page.selected = page.path === path)
    }

    return (
        <AppBar position="static" sx={{ height: '60px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SYNTRO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            return page.level_permission <= level_permission && (
                                <Button
                                    onClick={() => onClickButtonMenu(page.path)}
                                    key={page.title}
                                    sx={{ my: 2, color: 'white', display: 'block', bgcolor: page.selected? "#fff2":"transparent" }}
                                >
                                    {page.title}
                                </Button>
                            )
                        })}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="abrir menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {/* <Avatar alt="Renan" src="/static/images/avatar/2.jpg" /> */}
                                <Avatar sx={{ bgcolor: blue[500] }}>S</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {pages.map(page => {
                                return page.level_permission <= level_permission && (
                                    <Button
                                        onClick={() => navigate(page.path)}
                                        key={page.title}
                                        sx={{ color: 'white', fontSize: 12, mx: 4 }}
                                    >
                                        {page.title}
                                    </Button>
                                )
                            })}
                            <Button
                                onClick={handleLogout}
                                key={'sair'}
                                sx={{ color: 'red', fontSize: 12, mx: 4 }}
                            >
                                SAIR
                            </Button>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
