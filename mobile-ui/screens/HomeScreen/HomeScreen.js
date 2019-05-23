import React from 'react';
import { ScrollView, View } from 'react-native';
//Redux
import { connect } from 'react-redux';
import CashFlowCard from "../../components/CashFlowCard/CashFlowCard";
import CashFlowSummary from "../../components/CashFlowSummary/CashFlowSummary";
import AppHeader from "../../components/Header/Header";
import { fetchData } from "../../redux/HomeScreen/Actions";
//Styles
import { styles } from "./Styles";


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader title='Budget Screen' />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <CashFlowSummary cashFlows={this.props.cashFlows} />
          <CashFlowCard cashFlows={this.props.cashFlows} />
        </ScrollView>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchData: () => dispatch(fetchData())
  }
}

function mapStateToProps(state) {    
    return {
      cashFlows : state.cashflows.cashFlows
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


