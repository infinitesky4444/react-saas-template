import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Grid, Typography, Card, Button } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import WaveBorder from "../../../shared/WaveBorder";

const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  informationGrid: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }
  },
  wrapper: {
    position: "relative"
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  const openGithub = () => {
    window.open("https://github.com/dunky11/react-saas-template");
  };
  return (
    <Fragment>
      <div
        className={classNames(
          "lg-p-top bg-secondary-main pb-2",
          classes.wrapper
        )}
      >
        <div className={classNames("container-fluid", classes.container)}>
          <div className="row">
            <Card
              className={classNames("w-100 mx-2", classes.card)}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <div className="row justify-content-between">
                  <Grid item md={5} className={classes.informationGrid}>
                    <div className="d-flex flex-column justify-content-between h-100">
                      <Typography
                        variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        className="mb-4"
                      >
                        Free Template for building an SaaS app using Material-UI
                      </Typography>
                      <div>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          className="text-secondary-greyed mb-2"
                        >
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt
                        </Typography>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          onClick={openGithub}
                        >
                          Download from GitHub
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <img
                      src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                      className={classes.image}
                      autoPlay
                      muted
                      alt="header example"
                    />
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <WaveBorder color={theme.palette.secondary.main} />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
