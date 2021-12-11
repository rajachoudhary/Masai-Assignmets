import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Modal from "@mui/material/Modal"
import Paper from "@mui/material/Paper"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
// import
// import UploadIcon from "@mui/icons-material/Upload"

import React from "react";
const useStyles = makeStyles({
    paper:{
        height:"12rem",
        margin:"2rem",
        padding:"1rem"
    }
})
 export const Example1 = ()=>{
     const [state,setState] = React.useState(false)
     const [select,setSelect] = React.useState(1)
     const classes = useStyles()
    return(
        <Container maxwidth="xl">
            <Modal open={state} onClose={()=>setState(false)}>
                <Paper className={classes.paper}>
                    <Box>Model</Box>
                </Paper>
            </Modal>
            <Box>
                <Button>Text</Button>
            </Box>
            <Box>
                <TextField 
                onChange={(e)=>console.log(e.target.value)}
                label="Name"
                placeholder="add something"
                variant="filled"/>
            </Box>
            <Box mt={5} py={2}>
                <Checkbox

                />
            </Box>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={4} xl={3}item>
                    <Paper className="{classes.paper}">1</Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4} xl={3} item>
                <Paper className="{classes.paper}">2</Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4} xl={3} item>
                <Paper className="{classes.paper}">3</Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4} xl={3} item>
                <Paper className="{classes.paper}">4</Paper>
                </Grid>
                
            </Grid>
        </Container>
    )
}