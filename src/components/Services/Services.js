import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Services = () => {
    const classes = useStyles();
    return (
        <div className="container my-5">
            <div className="service-info my-3">
                <h2>Why you choose us</h2>
                <p>Barton waited always repair in within we do. An delighted offending
                    <br></br>
                  curiosity my is dashwoods at. Boy prosperous increasing surrounded.
                </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="https://i.ibb.co/1djQD6T/adult-blur-blurred-background-687824.png"

                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src="https://i.ibb.co/F511SGW/Group-204.png" alt="" />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Fast Delivery"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                            <a href="#">See more</a>
                        </CardContent>

                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="https://i.ibb.co/0BwMVrs/chef-cook-food-33614.png"
                            title="Paella dish"
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src="https://i.ibb.co/ZTGx2vF/Group-1133.png" alt="" />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="A Good Auto Responder"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                           <a href="#">See more</a>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="https://i.ibb.co/s9s6jJ8/architecture-building-city-2047397.png"
                            title="Paella dish"
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src="https://i.ibb.co/Zf1XH1q/Group-245.png" alt="" />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Home Delivery"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                           </Typography>
                           <a href="#">See more</a>
                        </CardContent>
                        
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;