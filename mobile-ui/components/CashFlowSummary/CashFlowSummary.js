import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Card } from "react-native-elements";

//styles 
import { styles } from "./Styles";

const CashFlowSummary = props => {
    let [income, expense] = calcCashFlows(props);
    let balance = income - expense;
    return (
        <Card wrapperStyle={styles.summaryContainer} >
            {renderCashFlow("Income", income)}
            {renderCashFlow("Expense", expense)}
            {renderCashFlow("Balance", balance)}
        </Card>
    );
};

const renderCashFlow = (name, value) => {
    return (<View style={styles.cashFlowContainer}>
        <Text>{name}</Text>
        <Text>{value}</Text>
    </View>)
}

const calcCashFlows = (props) => {
    let income = 0.0;
    let expense = 0.0;

    props
        .cashFlows
        .forEach(element => {
            if (element.type == "INCOME") {
                income += element.amount;
            } else {
                expense += element.amount;
            }
        });
    return [Math.round(income), Math.round(expense)];
}


CashFlowSummary.propTypes = {
    cashFlows: PropTypes.arrayOf(Object)
};

CashFlowSummary.defaultProps = {
    cashFlows: []
}

export default CashFlowSummary;