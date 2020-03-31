import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageListView from 'react-native-page-listview'

export default class TestScreen extends Component {
    constructor(props) {
        super(props);
        this.data = []
        this.state = {
            // data: []
        };
    }
    componentDidMount() {
    }
    refresh = (callBack) => {
        for (i = 0; i < 10; i++) {
            this.data.push(i)
        }
        callBack(this.data);
    }
    loadMore = (page, callBack) => {
        callBack(this.data);
    };
    renderRefreshView = () => {
        return (
            <View><Text>下拉刷新</Text></View>
        );
    };
    renderLoadMore = () => {
        return (
            <View><Text>加载更多</Text></View>
        );
    };
    renderNoMore = () => {
        return (
            <View><Text>我是有底线的</Text></View>
        );
    };
    renderRow = (item, index) => {
        return (<View><Text>{item}</Text></View>);
    }
    render() {
        return (
            <View style={styles.container}>
                <PageListView
                    pageLen={10}
                    renderRow={this.renderRow}
                    refresh={this.refresh}
                    loadMore={this.loadMore}
                    //上面四个属性使用方法同上
                    renderRefreshView={this.renderRefreshView}
                    // renderRefreshViewH={150}
                    renderLoadMore={this.renderLoadMore}
                    renderNoMore={this.renderNoMore}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height:100,
        backgroundColor: '#f00'
    }
})