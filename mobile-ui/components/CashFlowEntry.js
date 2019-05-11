import React from 'react';
import { View } from "react-native";
import PropTypes from 'prop-types';
import { ListItem } from "react-native-elements";

const CashFlowEntry = props => {
    return (
      <View>
          <ListItem
          key={props.cashflow.id}
          title={props.cashflow.subType}
          rightTitle={props.cashflow.amount.toString()}
          leftAvatar={props.cashflow.leftAvatar}
          bottomDivider={true}          
          />
      </View>  
    );
};

CashFlowEntry.propTypes = {
    cashflow : PropTypes.object
};

CashFlowEntry.defaultProps={
    cashflow : {
        id : 0,
        subType : '',
        amount: 0.0,
        leftAvatar: ''
    }
};

export default CashFlowEntry;