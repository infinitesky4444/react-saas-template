import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  dialogPaper: { maxWidth: `${theme.breakpoints.values.md}px !important` }
});

class ImageCropprDialog extends PureComponent {
  setCropFunction = cropFunction => {
    this.cropFunction = cropFunction;
  };

  /**
   * Passing cropFunction directly to the buttons onClicks event wont work
   */
  crop = () => {
    this.cropFunction();
  };

  render() {
    const {
      ImageCroppr,
      classes,
      onClose,
      open,
      src,
      onCrop,
      aspectRatio
    } = this.props;
    return (
      <Dialog
        open={open}
        onEscapeKeyDown={onClose}
        classes={{ paper: classes.dialogPaper }}
        style={{ overflowX: "visible" }}
      >
        <DialogContent className="pt-2 px-2">
          <ImageCroppr
            src={src}
            setCropFunction={this.setCropFunction}
            onCrop={onCrop}
            aspectRatio={aspectRatio}
          />
        </DialogContent>
        <DialogActions>
          <Button className="mr-1" onClick={onClose}>
            Close
          </Button>
          <Button variant="contained" color="secondary" onClick={this.crop}>
            Crop
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ImageCropprDialog.propTypes = {
  ImageCroppr: PropTypes.elementType,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  src: PropTypes.string,
  onCrop: PropTypes.func,
  aspectRatio: PropTypes.number
};

export default withStyles(styles, { withTheme: true })(ImageCropprDialog);
