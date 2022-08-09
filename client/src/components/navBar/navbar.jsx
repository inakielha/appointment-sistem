
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Home from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchCustomer } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../logInAll/logOut/dialog';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const [input,setInput] = React.useState({customerName:""})
  const [profile, setProfile] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleSearch(e){
    setInput({
      customerName: e.target.value
    })
  }
  function handleBtn(e){
    e.preventDefault()
    dispatch(searchCustomer(input))
  }
  function handleClick(e){
    navigate("/landing")
  }
  function handleClickUser(e){
    setProfile(!profile)
    console.log("gggg")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={(e)=>handleClick(e)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Home fontSize='large' />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Home
          </Typography>
          <Search sx={{
            display: "flex",
            alignItems: "center"
          }}>
              <SearchIcon sx={{cursor:"pointer", marginLeft: "3px"}} onClick={(e)=>handleBtn(e)}/>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>handleSearch(e)}
              value = {input.customerName}
            />
          </Search>
          <IconButton
            onClick={(e)=>handleClickUser(e)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, marginLeft: "1em" }}
          >
            <AccountCircleIcon fontSize='large' />
          </IconButton>
            {profile && <AlertDialog setProfile={setProfile}/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


