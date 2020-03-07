import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";
import AddBalanceDialog from "./AddBalanceDialog";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

class Subscription extends PureComponent {
  componentDidMount() {
    const { selectSubscription } = this.props;
    selectSubscription();
  }

  render() {
    const { transactions, classes } = this.props;
    return (
      <Paper>
        <AddBalanceDialog open></AddBalanceDialog>
        <List disablePadding>
          <SubscriptionInfo />
          <Divider className={classes.divider} />
          <SubscriptionTable transactions={transactions} />
        </List>
      </Paper>
    );
  }
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired
};

export default withStyles(styles)(Subscription);
