import React from 'react';
import {Container, Paper, Typography, Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const useStyles = makeStyles({
    root: {
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center"
    },
    Paper: {
        marginTop: "2em",
        width: '100%',
        height: "100%",
        color: 'red',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

const Link1 = React.forwardRef((props, ref) => <RouterLink ref={ref} {...props} />);

const EntryPage = ({history}) => {
    const classes = useStyles();
    return(
        <>
            <NavBar history={history}/>
            <Container className={classes.root}>
                <Paper className={classes.Paper}>
                    <Typography variant="h3">Sorry, you have wandered off the path!</Typography>
                    <Link to="/" component={Link1}>Head Home</Link>
                </Paper>
            </Container>
            <Footer />
        </>
    )
}

export default EntryPage;