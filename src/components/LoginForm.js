import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Card, CardSection, Input, Button, Spinner} from './common';
import { usernameChanged, platformChanged, findUser } from '../actions';

class LoginForm extends Component<Props> {
    static navigationOptions = {
        title: 'Search for a Player'
    }

    onUsernameChange(text){
        this.props.usernameChanged(text);
    }

    setPlatform(platform){
        console.log(platform);
        this.props.platformChanged(platform);
    }
    
    onButtonPress(){
        console.log(this.props);
        const {platform, username} = this.props;
        
        this.props.navigation.navigate('PlayerInfo', {username, platform, epicUserHandle: username});
    }

    renderPlatformButtons(){
        const {defaultContainerStyle, defaultTextStyle } = styles; 
        const     pcColor = '#f15a23';
        const    xbxColor = '#008b01';
        const    psnColor = '#0a214a'; 

        var pcContainerStyle = {...defaultContainerStyle};
        var xbxContainerStyle = {...defaultContainerStyle};
        var psnContainerStyle = {...defaultContainerStyle};
        var pcTextStyle = {...defaultTextStyle}; 
        var xbxTextStyle = {...defaultTextStyle}; 
        var psnTextStyle = {...defaultTextStyle};

        switch(this.props.platform){
            case 'pc':
                pcContainerStyle.backgroundColor = pcColor;
                pcContainerStyle.borderColor = pcColor;
                pcTextStyle.color = 'white';
                break;
            case 'xb1':
                xbxContainerStyle.backgroundColor = xbxColor;
                xbxContainerStyle.borderColor = xbxColor;
                xbxTextStyle.color = 'white';
                break;
            case 'psn':
                psnContainerStyle.backgroundColor = psnColor;
                psnContainerStyle.borderColor = psnColor;
                psnTextStyle.color = 'white';
                break;

        }
        return(    
            <CardSection>
                <Button containerStyle={pcContainerStyle} textStyle={pcTextStyle} onPress={this.setPlatform.bind(this, "pc")}><Ionicons name="logo-windows" size={16} color={pcTextStyle.color} /> PC</Button>
                <Button containerStyle={xbxContainerStyle} textStyle={xbxTextStyle} onPress={this.setPlatform.bind(this, "xb1")}><Ionicons name="logo-xbox" size={16} color={xbxTextStyle.color} /> XB1</Button>
                <Button containerStyle={psnContainerStyle} textStyle={psnTextStyle} onPress={this.setPlatform.bind(this, "psn")}><Ionicons name="logo-playstation" size={16} color={psnTextStyle.color} /> PS4</Button>
            </CardSection>
        );
    }

    renderButton(){
        if(this.props.isLoading){
            return <Spinner/>;
        } else {
            return <Button onPress={this.onButtonPress.bind(this)}>Search</Button>;
        }
    }

    renderError(){
        if(this.props.error !== ''){
            return (
                <CardSection>
                    <View style={{backgroundColor: '#C00', flex: 1}}>
                        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                    </View>
                </CardSection>
            )
        }
    }

    render(){
        console.log(this.props);
        const {username, platform} = this.props;
        return (
            <View>
                <Card>
                    <CardSection>
                        <Image style={styles.logoImageStyle} source={require('../../images/fortnitelogo.png')}/>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.titleLabelStyle}>Tracker Network - Fortnite Stats</Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Input 
                            label="Username"
                            placeholder="Ninja"
                            onChangeText={this.onUsernameChange.bind(this)}
                            value={username}
                            />
                    </CardSection>
                    {this.renderPlatformButtons()}
                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        )
    }

}

const mapStateToProps = state => {
    const {username, platform, isLoading, error} = state.auth;
    return { username, platform, isLoading, error};
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    },
    defaultContainerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    defaultTextStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    logoImageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    titleLabelStyle: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }

}

export default connect(mapStateToProps, {usernameChanged, platformChanged, findUser})(LoginForm);

