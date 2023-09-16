import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';

import NavbarCss from './Navbar.module.scss'

const SideNavbar = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleScroll=(event)=>{
        console.log('book',window.document.documentElement.scrollHeight)
        console.log('books',window.innerHeight)
        console.log('booksss',window.scrollY)
        let scrollno = window.scrollY;
        if(scrollno >= 57){
             document.getElementById("sidenav").style.cssText="position: fixed;top: 0 ;bottom: 0;height: 100vh;width:20%;overflow-y: scroll;"
        }else{
            document.getElementById("sidenav").style.cssText="position: static;top: 3.7rem ;bottom: 0;height: 100vh;overflow-y: scroll;"
        }

    }

    window.addEventListener('scroll', handleScroll);
    // window.removeEventListener('scroll', handleScroll);
    return (
        <div className={NavbarCss.sidenav} id='sidenav'>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
              
                <ListItemButton
                 selected={selectedIndex === 0}
                 onClick={(event) => handleListItemClick(event, 0)}
                 >
                    <ListItemIcon>
                       <DashboardIcon style={{color:selectedIndex === 0?'black':'',}}/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton 
                 
                onClick={(event)=>{handleClick()}}>
                    <ListItemIcon>
                        <GroupsIcon  style={{color:open === true ?'black':'',}}/>
                    </ListItemIcon>
                    <ListItemText primary="Employee" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}
                         selected={selectedIndex === 11}
                         onClick={(event) => handleListItemClick(event, 11)}
                        >
                            <ListItemIcon>
                                <GroupAddTwoToneIcon  style={{color:selectedIndex === 11?'black':'',}}/>
                            </ListItemIcon>
                            <ListItemText primary="Add Employee" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}
                        selected={selectedIndex === 12}
                        onClick={(event) => handleListItemClick(event, 12)}
                        >
                            <ListItemIcon>
                                <ManageAccountsTwoToneIcon style={{color:selectedIndex === 12?'black':'',}}/>
                            </ListItemIcon>
                            <ListItemText primary="Manage Employee" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default SideNavbar