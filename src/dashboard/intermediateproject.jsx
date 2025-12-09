import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function IntemediateProjects() {
    return (
        <div>
            <h2>Intermediate Projects</h2>
            <div style={{ marginLeft: "20px", marginTop: "50px", display: "flex", gap: "70px" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image='./public/typing.png'
                        title="Typing App"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Typing speed test App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            A simple typing speed application built with HTML, CSS, and JavaScript.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Concept: Measuring typing speed, tracking accuracy, providing feedback
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image='./public/musicplayer.webp'
                        title="Music Player App"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Music Player App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            A simple music player application built with HTML, CSS, and JavaScript.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Concept: Playing audio files, creating playlists, and providing playback controls.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>


                 <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image='./public/recipe.png'
                        title="Recipe App"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Recipe App
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            A simple recipe application built with HTML, CSS, and JavaScript.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Concept: Searching for recipes, viewing ingredients, and following cooking instructions.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>   
 
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image='./public/expense.jpg'
                        title="Expense Tracker"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Expense Tracker
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            A simple expense tracker application built with HTML, CSS, and JavaScript.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Concept: Adding expenses, viewing expense history, and generating reports.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>                                                    
            </div>
        </div>
    )
}