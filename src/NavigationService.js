import {NavigationActions} from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
}

const navigate = (routeName, params) => {
    _navigator.dispatch(
        NavigationActions.navigate({routeName, params})
    );
}

const setParams = (params, routeName) => {
    var actualParams = {params: params, key: routeName};
    _navigator.dispatch(
        NavigationActions.setParams(actualParams)
    );
}

export default { navigate, setParams, setTopLevelNavigator};