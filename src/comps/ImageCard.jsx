import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useFirestore from "../hooks/useFirestore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const ImageCard = ({ setSelectedImg }) => {
  const classes = useStyles();
  const { docs } = useFirestore("images");
  return (
    <div>
      {docs.map((doc, index) => {
        return (
          <>
            <Card className={classes.root}  onClick={() => setSelectedImg(doc.url)} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={doc.url}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ImageCard;
