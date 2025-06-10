import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material";
import styles from "./Category.module.scss";
import { useNavigate } from "react-router-dom";

export default function Category() {
  // const navigate =useNavigate()
  const itemData = [
    {
      img: "https://kuzov-media.ru/upload/iblock/b64/vtcp45wgg1zjuuriy0b42b8jkhmrb43m.jpg",
      title: "Транспорт",
      author: "@askar_auto_dubai",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://kor.ill.in.ua/m/610x385/2341633.jpg",
      title: "Отдых",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Техника и Электроника",
      author: "@helloimnik",
    },
    {
      img: "https://status-media.com/wp-content/uploads/2022/06/f1.jpg",
      title: "Недвижимость",
      author: "@nolanissac",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "https://gejzer.ru/wp-content/uploads/2013/12/sfera-uslug.jpg",
      title: "Услуги",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Спорт и Хобби",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Дом и Сад",
      author: "@katie_wasserman",
    },
    {
      img: "https://cdn-user30887.skyeng.ru/uploads/67a13913707ec377788269.webp",
      title: "Работа",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://mlyn.by/app/uploads/2025/04/suitcase-packed-with-travel-paraphernalia_23-2149433962-1024x683.jpg",
      title: "Личные вещи",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    }, {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
  ];

  return (
    <div className="container">
        <h1 className={styles.title}>Категория</h1>
      <div className={styles.category}>
        
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            style={{ width: "240px", height: "140px",borderRadius:'10px' }}
          >
            <img
            // onClick={()=>navigate('/basket')}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 3x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            style={{height:"42px"}}
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                // style={{height:'-4px',padding:"-10px"}}
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </div>
    </div>
  );
}
