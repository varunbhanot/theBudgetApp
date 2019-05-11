import React from 'react';
import { ScrollView,TouchableOpacity } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import PropTypes from 'prop-types';


const CashFlowCard = props => {
    return (
        <ScrollView>
        </ScrollView>
    );
};

CashFlowCard.propTypes = {
    cashFlows : PropTypes.arrayOf(Object)    
};

CashFlowCard.defaultProps = {
    cashFlows : []
};

export default CashFlowCard;