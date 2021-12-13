import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';
import makeStyles from '@mui/styles/makeStyles';
// import { display } from "@mui/system";
const useStyles = makeStyles((theme)=>({
    menuButton:{
      marginRight:600,
    // flex:6
    },
    title:{
        flex:12
    },
    navbarButton:{
      padding:10,  
    }
}))
    
export const Navbar = ()=>{
    const classes = useStyles()
    return(
        <AppBar >
            <Toolbar>
            <IconButton  color="inherit" aria-label="menu" edge="start">
                <MenuIcon className={classes.menuButton}/>
            </IconButton >
                <Typography  className={classes.title} variant="h6">Masai School </Typography>
                <IconButton>
                    <GitHubIcon/>
                    <Typography className={classes.navbarButton} color="white" variant="h6">GitHub</Typography>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                    <Typography className={classes.navbarButton} color="white" variant="h6">Slack</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}