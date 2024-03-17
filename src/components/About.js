import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
// import {DeleteIcon} from '@mui/icons-material';

// import img
import Image from '../assets/img/about.webp';
import I1 from '../assets/img/Interest/finance.png';
import I2 from '../assets/img/Interest/games.png';
import I3 from '../assets/img/Interest/phy.png';
import I4 from '../assets/img/Interest/universe.png';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



const About = () => {

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          {/* <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            // src={Image}
            alt=''
          /> */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Shubham Gautam
              </h2>
              <p className='mb-4 text-accent'>
                Software Engineer
              </p>
              {/* <hr className='mb-8 opacity-5' /> */}
              <p className='mb-8'>
              As a Computer Science enthusiast, I am deeply passionate about the rapid evolution of technology. Proficient in a diverse array of programming languages such as C, Java, and JavaScript, I continuously strive to broaden my technical skill set. My expertise extends to frameworks like Node.js and Spring, which complement my role as a Web Developer specializing in the MERN stack. Presently, I am delving into the realms of Deep Learning and Natural Language Processing, eager to harness these cutting-edge fields to drive innovation and create intelligent solutions. <br />
              {/* <br /> */}
              </p>
              <p className='mb-4 text-accent'>
               Interests
              </p>
              {/* <hr className='mb-8 opacity-5' /> */}
              <div className='flex'>
                <img className='pr-5' src={I1} title='Finance' alt='Finance'></img>
                <img src={I2} className='pr-5' title='Video Games' alt='Video Games'></img>
                <img className='pr-5' src={I4} title='Astronomy' alt='Astronomy'></img>
                <img className='pr-5' src={I3} title='Theoritical Physics' alt='Theoritical Physics'></img>
              </div>
              <br></br>
              
            </div>

          </div>

          <div>
          {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>About</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
            {/* <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}
          </div>
        </div>
        
        <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Contact me</button>

      </div>
    </section>
  );
};

export default About;
