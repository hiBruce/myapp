import React, { Component } from 'react';
import { WebView, View, Platform } from 'react-native';
import AndroidWebView from 'react-native-webview-file-upload-android';
//...
export default class webview extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {Platform.select({
                    android: () => <AndroidWebView
                        source={{ uri: 'http://172.18.65.101:8080/apptest_war_exploded/' }}
                    />,
                    ios: () => <WebView
                        source={{ uri: 'https://mobilehtml5.org/ts/?id=23' }}
                    />
                })()}
            </View>
        );
    }
}