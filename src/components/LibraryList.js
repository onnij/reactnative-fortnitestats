import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const mapStateToProps = state => {
    console.log(state);
    console.log('Map State to props');
    return {libraries: state.libraries, selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps)(
    class LibraryList extends Component {
        renderItem(library){
            console.log('Render Library', library);
            return <ListItem library={library}/>;
        }

        render(){
            return <FlatList
                        data={this.props.libraries}
                        renderItem={this.renderItem}
                        keyExtractor={(library) => '' + library.id}
                        style={styles.listStyle}
                    />;
        }
    }
);

const styles = {
    listStyle : {
        flex: 1,
        alignSelf: 'stretch'
    }
}