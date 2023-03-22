import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Menu, MenuItem } from '@mui/material'
import { SetStateAction, useState } from 'react'


const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenuClick = (event: { currentTarget: SetStateAction<HTMLElement | null> }) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (

        <Box>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#1876d2", color: "#FFFFFF" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Register Card Form
                    </Typography>

                </Toolbar>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    PaperProps={{
                        style: {
                            height: "100vh",
                            width: "30vw",
                        },
                        square: true,
                    }}
                >
                    <Toolbar style={{ backgroundColor: "#1876d2", color: "#FFFFFF" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClose}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" >
                            Menu
                        </Typography>
                    </Toolbar>
                    <MenuItem>This is menu content</MenuItem>
                </Menu>
            </AppBar>
        </Box>
    )
}

export default DropDownMenu