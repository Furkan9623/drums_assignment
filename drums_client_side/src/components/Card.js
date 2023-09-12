import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
export default function BookCard({ book }) {
  const { title, author, image, description, price } = book;
  return (
    <Card sx={{ width: "20vmax", height: "25vmax", paddingBottom: "3vmax" }}>
      <img src={image} width="100%" height="50%" alt="" />

      <Typography>Title : {title}</Typography>
      <Typography> Author : {author}</Typography>
      <Typography>Price : ₹ {price}</Typography>
      <CardContent>
        <Typography sx={{ textAlign: "left" }}>
          {description.slice(0, 70)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1vmax",
          }}
        >
          <Button variant="contained" size="small">
            ADD TO CART
          </Button>
          <Button variant="contained" size="small">
            ADD TO FAVOURITE
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
