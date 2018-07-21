import React, { Component } from 'react';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common';
import * as actions from '../actions';

const mapStateToProps = (state, ownProps) => {
    const expanded = (state.selectedLibraryId === ownProps.library.item.id)
    return {expanded};
};

export default connect(mapStateToProps, actions)(class ListItem extends Component<Props>{

    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }
    
    renderDescription(){
        if(this.props.expanded){
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{this.props.library.item.description}</Text>
                </CardSection>
            );
        }
    }
    
    render(){
        console.log(this.props);
        const {titleStyle} = styles;
        const {id, title, description} = this.props.library.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
});

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex:1
    },
    descriptionStyle: {
        padding: 10
    }
}