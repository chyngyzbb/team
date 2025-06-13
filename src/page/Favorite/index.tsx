// import React from "react";
// import { useSelector } from "react-redux";
// import styles from "./Favorite.module.scss";
// import { useNavigate } from "react-router-dom";

// const Favorite = () => {
//     const navigate=useNavigate()
//   const user = useSelector((state) => state.product.products);
//   let res = [];
//   user.map((el) => {
//     if (res.includes(el.user)) {
//       el;
//     } else {
//       res.push(el.user);
//     }
//   });

//   console.log("User:", res);

//   return (
//     <div className="container">
//       <div className={styles.root}>
//         <h2>Ползовательи</h2>
//         {res.map((el, idx) => (
//           <li onClick={() => navigate(`/detail-page/${el}`)}>
//             {idx + 1}.{el}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favorite;
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import styles from "./Favorite.module.scss";
import { useNavigate } from "react-router-dom";

export default function Favorite() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.product.products);
  let res = [];
  user.map((el) => {
    if (res.includes(el.user)) {
      el;
    } else {
      res.push(el.user);
    }
  });

  console.log("User:", res);
  return (
    <div className="container">
      <List sx={{ width: "100wh", padding: "50px 0" }}>
        {res.map((el, idx) => (
          // <li onClick={() => navigate(`/detail-page/${el}`)}>
          //   {idx + 1}.{el}
          // </li>
          <div>
            <ListItem
              sx={{ width: "100wh", bgcolor: "background.paper" }}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
              onClick={() => navigate(`/detail-page/${el}`)}
                primary={el}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {/* Ali Connors */}
                    </Typography>
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
}
