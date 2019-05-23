import { shallow } from 'enzyme';
import React from 'react';
import { View,Text } from 'react-native';
import { Card } from "react-native-elements";
import  CashFlowSummary  from "./CashFlowSummary";

let wrapper;

beforeEach (()=>{
    wrapper = shallow(<CashFlowSummary cashFlows={_testData()}/>);
});

describe('<CashFlowSummary/> rendering', () => {

    it('should render', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have a card component', () => {
        expect(wrapper.find(Card).exists()).toBe(true);
    });

    it('should have three sections for information ', () => {
        const cardComponent = wrapper.find(Card);
        expect(cardComponent.find(View)).toHaveLength(3);        
    });

    it('should render income section ', () => {
        const incomeSection = wrapper.find(Card).find(View).first();
        expect(incomeSection.contains([
            <Text>Income</Text>,
            <Text>{1000}</Text>
        ])).toEqual(true);
    });

     it('should render expense section ', () => {
        const incomeSection = wrapper.find(Card).find(View).at(1);
        expect(incomeSection.contains([
            <Text>Expense</Text>,
            <Text>{20}</Text>
        ])).toEqual(true);
    });

    it('should render balance section ', () => {
        const incomeSection = wrapper.find(Card).find(View).at(2);
        expect(incomeSection.contains([
            <Text>Balance</Text>,
            <Text>{980}</Text>
        ])).toEqual(true);
    });
 
});

const _testData = ()=>{
    return [
        {
          id : 1,
          subType : 'Salary',
          type : 'INCOME',
          amount: 1000,
          leftAvatar: '../xyz.png'
      },
      {
        id : 2,
        subType : 'Food',
        type: 'EXPENSE',
        amount: 20,
        leftAvatar: '../xyz.png'
    }
      ]
};