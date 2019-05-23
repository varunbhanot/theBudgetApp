import React from 'react';
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import PropTypes from 'prop-types';
import CashFlowEntry from "../CashFlowEntry/CashFlowEntry";


const CashFlowCard = props => {
    
    return (
        <ScrollView>
            <Card title={currentDate()}>
                {
                props.cashFlows.map(function (element) {
                    return <CashFlowEntry key={element.id}  cashflow={element}/>
                })
                }
            </Card>
        </ScrollView>
    );
};

const currentDate = ()=>{
    const date = new Date();
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
};

CashFlowCard.propTypes = {
    cashFlows: PropTypes.arrayOf(Object)
};

CashFlowCard.defaultProps = {
    cashFlows: []
};

export default CashFlowCard;