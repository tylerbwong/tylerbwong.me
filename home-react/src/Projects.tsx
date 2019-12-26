import React from 'react';
import stack from './stack.png'
import allaboard from './allaboard.png'
import pokebase from './pokebase.png'
import { 
  Grid, 
  Grow,
  Typography, 
  Card, 
  CardContent, 
  CardActionArea, 
  CardMedia, 
  makeStyles,
} from '@material-ui/core';

interface Project {
  name: string;
  image: any;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Stack",
    image: stack,
    description: "An Android application for viewing StackOverflow posts",
    link: "https://github.com/tylerbwong/stack",
  },
  {
    name: "AllAboard",
    image: allaboard,
    description: "A Kotlin DSL for creating onboarding flows in your Android apps",
    link: "https://github.com/tylerbwong/AllAboard",
  },
  {
    name: "Pokebase",
    image: pokebase,
    description: "Android application that let's you view information on the first 721 Pokémon",
    link: "https://github.com/tylerbwong/Pokebase",
  },
]

const useStyles = makeStyles({
  media: {
    height: 200,
  }
});

export default function Projects() {
  const classes = useStyles()
  
  return (
    <Grid item xs={12} style={{ marginLeft: 24, marginRight: 24 }}>  
      <div style={{ marginTop: 64 }}>
        <Grow in={true} timeout={2000}>
          <Typography color="inherit" variant="h5" style={{ marginBottom: 16 }}>
            <b>Projects</b>
          </Typography>
        </Grow>
        <Grid
          container
          direction="row"
          style={{ marginBottom: 16 }}
        >
          {
            projects.map((project: Project, index: number) =>
              <Grow in={true} timeout={2500 + index * 500}>
                <Card style={{ marginTop: 8, marginRight: 8, marginBottom: 8 }}>
                  <CardActionArea href={project.link}>
                    <CardMedia
                      className={classes.media}
                      image={project.image}
                      title={project.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            )
          }
        </Grid>
      </div>
    </Grid>
  );
}