import React from 'react';
import PropTypes from 'prop-types';
import { Header as RNHeader } from "react-native-elements";
//styles

import { styles } from "./Styles";


const Header = props => {
    return (
        <RNHeader
        centerComponent={_renderCenterComponent(props)}
        containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        
        />
    );
};

Header.propTypes = {
    title : PropTypes.string
};

export default Header;

function _renderCenterComponent(props) {
    return { text: props.title, style: styles.title};
}
