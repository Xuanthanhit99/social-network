import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    media:{
        height: 250,
        [theme.breakpoints.down("sm")]:{
            height: 150,
        }
    },
    card:{
        marginBottom: theme.spacing(5)
    }
}))
const Post = () => {

  const classes = useStyles()
  return <Card className={classes.card}>
      <CardActionArea>
          <CardMedia 
            className={classes.media}
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="my Post"
          />
          <CardContent>
              <Typography gutterBottom variant="h5">my first post</Typography>
              <Typography variant="body">lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quibusdam consectetur earum est repudiandae aliquam neque molestiae,praesentium placeat  unde illo?
                    Recusandae sapiente qui eligendi repellat , accusantium nobis abcaecati culpa magni
              </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
      </CardActions>
  </Card>
};

export default Post;