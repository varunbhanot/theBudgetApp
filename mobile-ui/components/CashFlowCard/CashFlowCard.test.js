import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CashFlowCard from "../CashFlowCard/CashFlowCard";
import CashFlowEntry from "../CashFlowEntry/CashFlowEntry";
import { Card } from "react-native-elements";

describe('<CashFlowCard />', () => {
    it('should render card component', () => {
        const wrapper = shallow(<CashFlowCard />);
        expect(wrapper.exists()).toBeTruthy
    });

    it('should render a card ', () => {
        const wrapper = shallow(<CashFlowCard/>);
        expect(wrapper.find(Card).exists()).toBe(true);
    });

    it('should render a cashFlowEntry', () => {
        const wrapper = shallow(<CashFlowCard cashFlows= {
            [
                {
                    id : 1,
                    subType : 'Salary',
                    amount: 10.10,
                    leftAvatar: '../xyz.png'
                }
            ]
        }/>);

        expect(wrapper.find(CashFlowEntry).exists()).toBe(true);

        
    });

    
});


