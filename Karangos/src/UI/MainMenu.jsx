import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function MainMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                color="secondary"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/"
                    divider
                >
                    Página inicial
                </MenuItem>

                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/cars"
                >

                    Carros
                </MenuItem>

                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/customers"
                >
                    Clientes
                </MenuItem>
            </Menu>
        </div>
    );
}