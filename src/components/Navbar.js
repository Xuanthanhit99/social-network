import {alpha, AppBar,Avatar,Badge,InputBase,makeStyles, Toolbar,Typography} from '@material-ui/core';
import { Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display: "block"
        }
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    search:{
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
    },
    input: {
        color:"white",
        marginLeft: theme.spacing(1)
    },
    icons:{
        display: "flex",
        alignItems: "center",
    },
    badge:{
        marginRight: theme.spacing(2)
    }
}))
const Navbar = () => {

  const classes = useStyles()
  return( 
      <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Xuanthanh Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                Xuanthanh
            </Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase placeholder="search..." className={classes.input}/>
            </div>
            <div className={classes.icons}>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail/>
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications/>
                </Badge>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
          </Toolbar>
      </AppBar>
  )
};

export default Navbar;