/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Image1 from "assets/sattvaimg/1.png";
import Image2 from "assets/sattvaimg/2.png";
import Image3 from "assets/sattvaimg/3.png";
import Image4 from "assets/sattvaimg/4.png";
import Image5 from "assets/sattvaimg/5.png";
import Image6 from "assets/sattvaimg/6.png";
import Image7 from "assets/sattvaimg/7.png";
import Image8 from "assets/sattvaimg/8.png";
import Image9 from "assets/sattvaimg/9.png";
import Image10 from "assets/img/header-doc.jpeg";
import Image11 from "assets/img/sidebar-1.jpg";
import Image12 from "assets/img/sidebar-2.jpg";
import Image13 from "assets/img/sidebar-3.jpg";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";

const useStyles = makeStyles(styles);

export default function TwitterImages() {
  const classes = useStyles();
  return (
    <div>
      <Heading
        textAlign="center"
        title="Twitter Images"
        category={
          <span>
            Displays all the images posted on <b>Twitter</b> under the hashtag <b>#SattvaNFT</b><br />
            <small>Includes images which are rejected or in pending also.</small> 
          </span>
        }
      />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image1} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ textAlign: "center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image2} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image3} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image4} alt="..." width="200" height="200" />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image5} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image5} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image6} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image7} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image8} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image9} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image10} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image11} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem><GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image12} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem><GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader image>
                <img src={Image13} alt="..." width="200" height="200"/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle} style={{ display:"flex", justifyContent:"center"}}>Name of the image</h4>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info" icon>
              <CardIcon color="info">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Coloured Line Chart <small>- Rounded</small>
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={colouredLineChart.data}
                type="Line"
                options={colouredLineChart.options}
                listener={colouredLineChart.animation}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Multiple Bars Chart <small>- Bar Chart</small>
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={multipleBarsChart.data}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
          <Card>
            <CardHeader color="warning" icon>
              <CardIcon color="warning">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Coloured Lines Chart <small>- Rounded</small>
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={colouredLinesChart.data}
                type="Line"
                options={colouredLinesChart.options}
                listener={colouredLinesChart.animation}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="danger" icon>
              <CardIcon color="danger">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Pie Chart</h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={pieChart.data}
                type="Pie"
                options={pieChart.options}
              />
            </CardBody>
            <CardFooter stats className={classes.cardFooter}>
              <h6 className={classes.legendTitle}>Legend</h6>
              <i className={"fas fa-circle " + classes.info} /> Apple{` `}
              <i className={"fas fa-circle " + classes.warning} /> Samsung
              {` `}
              <i className={"fas fa-circle " + classes.danger} /> Windows Phone
              {` `}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
