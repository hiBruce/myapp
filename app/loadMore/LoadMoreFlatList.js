import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class MoreFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            showFoot: 1
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('aaaaaaaaaa', nextProps.data.length + '-----'+ this.props.data.length + '-----' + this.state.data.length)
        if (nextProps.data.length != this.state.data.length) {
            this.setState({
                data: nextProps.data,
                showFoot: 1
            })
        } else {
            this.setState({
                showFoot: 2
            })
        }
    }

    /**
     * 加载底部视图
     */
    _renderFooter() {
        if (this.state.showFoot == 1) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        加载更多
                    </Text>
                </View>
            );
        } else if (this.state.showFoot == 2) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        我是有底线的
                    </Text>
                </View>
            );
        }
    }
    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    render() {
        let { renderItemView, headerView, endReached, emptyView } = this.props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItemView}
                    ListHeaderComponent={headerView}
                    ListEmptyComponent={emptyView}
                    ListFooterComponent={this._renderFooter.bind(this)}
                    onEndReached={endReached}
                    onEndReachedThreshold={0.1}
                    ItemSeparatorComponent={this._separator}
                />
            </View>
        );
    }
}
