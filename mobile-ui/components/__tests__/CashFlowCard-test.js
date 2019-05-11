import 'react-native';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CashFlowCard from "../CashFlowCard";
import { ListItem } from "react-native-elements";

describe('<CashFlowCard />', () => {
    it('should render card component', () => {
        const wrapper = shallow(<CashFlowCard />);
        expect(wrapper.exists()).toBeTruthy
    });

    
});


