import {Avatar, Container,makeStyles, Typography} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10)
    },
    title:{
        fontSize: 16,
        fontWeight: 500,
        color: "#555"
    }
}))
const Rightbar = () => {

  const classes = useStyles()
  return  <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
          Online Friends
      </Typography>
      <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
  </Container>;
};

export default Rightbar;