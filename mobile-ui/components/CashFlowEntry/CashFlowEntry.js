import React from 'react';
import { View } from "react-native";
import PropTypes from 'prop-types';
import { ListItem, Icon } from "react-native-elements";



const CashFlowEntry = props => {
    return (
      <View>
          <ListItem
          key={props.cashflow.id}
          title={props.cashflow.subType}
          rightTitle={Math.round(props.cashflow.amount).toString()}
          leftAvatar={<Icon name="food" type="material-community"  color='#00aced'/>}
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