import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import CashFlowEntry from "../CashFlowEntry";
import { ListItem } from "react-native-elements";


describe('<CashFlowEntry />', () => {
    it('renders CashFlowEntry ', () => {
        const wrapper = shallow(<CashFlowEntry/>);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render a ListItem', () => {
        const wrapper = shallow(<CashFlowEntry/>);
        expect(wrapper.find(ListItem).exists()).toBe(true);
    });

    it('should populate default props', () => {
        const wrapper = shallow(<CashFlowEntry/>);
        expect(wrapper.props().title).toBeFalsy
        expect(wrapper.props().bottomDivider).toBeTruthy
    });

    it('should render ListItem with prop values', () => {
        const wrapper = shallow(<CashFlowEntry cashflow={{
            id : 1,
            subType : 'Salary',
            amount: 10.10,
            leftAvatar: '../xyz.png'
        }}/>);
        expect(wrapper.find(ListItem).prop("title")).toEqual("Salary");
        expect(wrapper.find(ListItem).prop("rightTitle")).toEqual("10.1");
    });



});
