import "./Header2.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./Header.module.scss";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/authSlice";
import { RootState } from "../../store/store";
import { setSearch } from "../../store/slice/searchSlice";
import { ProfileState } from "../../Types/types";
// import Button from '@mui/material/Button';

const pages = ["Все", "Ползователь", "AI", "Карзина", "Категория"];
const settings = [
  "Профиль",
  "Мои продукты",
  "Добавить продукт",
  "Сообщения",
  "Выйти из  аккаунта"
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [profile, setProfile] = React.useState<ProfileState[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const pro = useSelector((state: RootState) => state.profile.profile);


console.log(profile);


  const handleOpenNavMenu = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function searchFunc(e:React.ChangeEvent<HTMLInputElement>){
    setSearchValue(e.target.value)
    sendSearch()
    
  }

  function sendSearch(){
    dispatch(setSearch(searchValue))
  }
  function getProfile(){
   const res=pro.filter((el)=>el.email===user?el:'')
 setProfile(res)

}

  // const top10 = ["Apple", "Car", "Home"];
React.useEffect(()=>{
  
getProfile()
},[dispatch])


function exit(){
  dispatch(setUser(null))
  return "/"
}

  return (
    <AppBar
      className={styles.appbar}
      position="static"
      style={{
        background: "#fadd72",
        // height:'80px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar} disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Button variant="contained" disableElevation>
              Каталог
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem style={{ color: "black" }} key={page}>
                  <Typography
                    style={{ color: "black" }}
                    sx={{ textAlign: "center" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <Button
                style={{ color: "black" }}
                key={page}
                onClick={() =>
                  navigate(
                    `${
                      idx === 0
                        ? "/home"
                        : idx === 1
                        ? "/favorite"
                        : idx === 2
                        ? "/ai"
                        : idx === 3
                        ? "/basket"
                        : idx === 4
                        ? "/category"
                        : ""
                    }`
                  )
                }
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <Autocomplete
            style={{ padding: "20px" }}
            disablePortal
            options={top10}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Найти товар" />
            )}
          /> */}
          <div className="search-wrapper">
            <input onChange={(e)=>searchFunc(e)} style={{color:'black'}} type="text" placeholder=" Я ищу..." />
            <button onClick={()=>sendSearch()} className="border">Поиск</button>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="меню">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                {/* {profile.map((el)=>(
                  <Avatar alt="Remy Sharp" src={`${el.url?'https://cdn-icons-png.flaticon.com/512/3541/3541871.png':el.url}`} />
                 ))}  */}
                  {/* {profile.map((el)=>(
                  <Avatar alt="Travis Howard" src={`${el.url?el.url:'https://cdn-icons-png.flaticon.com/512/3541/3541871.png'}`} />
                 ))}  */}
              </IconButton>
            </Tooltip>
            <p>{user ? user : "Войти"}</p>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, idx) => (
                <MenuItem
                  key={setting}
                  onClick={() =>
                    
                    navigate(
                      `${
                        idx === 0
                          ? "/profile"
                          : idx === 1
                          ? "/my-product"
                          : idx === 2
                          ? "/add-product"
                          : idx===3
                          ? "/message"
                          : exit()
                          
                      }`
                    )
                  }
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
