import React from 'react';
import me from './me.png';
import { Grid, Grow, Typography } from '@material-ui/core';
import Typed from 'react-typed';

const greetings = ["你好!", "¡hola!", "안녕!", "hello!"]

interface HeaderProps {
  isLoading: boolean;
  setLoading: Function;
}

export default function Header(props: HeaderProps) {

  const onFinishLoading = () => props.setLoading(false)

  return (
    <Grid item xs={12}>  
      <div style={{ textAlign: "center", marginTop: 148 }}>
        <Grow in={!props.isLoading} timeout={500}>
          <img src={me} width={192} onLoad={onFinishLoading} onError={onFinishLoading} alt="logo" />
        </Grow>
        <Grow in={!props.isLoading} timeout={1000}>
          <Typography color="inherit" style={{ marginTop: 16 }} variant="h3">
            <Typed strings={greetings} typeSpeed={60} loop cursorChar="‎" />
          </Typography>
        </Grow>
        <Grow in={!props.isLoading} timeout={1500}>
          <div>
            <Typography color="inherit" style={{ marginTop: 16 }} variant="h6">
              I'm a <b>Software Engineer</b> at <b>Credit Karma</b> building <b>Android</b> applications.
            </Typography>
            <Typography color="inherit" variant="h6">
              Thanks for stopping by!
            </Typography>
          </div>
        </Grow>
      </div>
    </Grid>
  );
}
