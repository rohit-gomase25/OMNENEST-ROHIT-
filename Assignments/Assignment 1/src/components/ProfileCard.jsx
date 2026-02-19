import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ProfileCard({ name, role, image }) {
  return (
    <Card sx={{ width: 250, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard; 
