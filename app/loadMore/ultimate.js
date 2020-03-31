import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { UltimateListView } from 'react-native-ultimate-listview'

export default class ultimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        };
    }

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            let pageLimit = 24
            const skip = (page - 1) * pageLimit
            let rowData = Array.from({ length: pageLimit }, (value, index) => `item -> ${index + skip}`)
            if (page === 5) {
                rowData = []
            }
            // await this.sleep(2000)
            startFetch(rowData, pageLimit)
        } catch (err) {
            abortFetch() // manually stop the refresh or pagination if it encounters network error
            console.log(err)
        }
    }

    fetchData = async (page=1, startFetch, abortFetch) => {
        let tmp = ['123', '1343', '142', '13435r', 'erutr93', 'd0e9wufo9']
        this.setState({
            data: this.state.data.concat(tmp)
        })
        startFetch(this.state.data, 10);
        // abortFetch();
    };

    _header() {
        return (<View><Text>aaaaaaaaaaaaaa</Text></View>)
    }

    renderItem(item, index) {
        return (<View><Text>{item}</Text></View>)
    }

    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    renderPaginationFetchingView = () => (
        <View><Text>我是有底线的</Text></View>
      )
    render() {
        return (
            <View style={{ flex: 1 }}>
                <UltimateListView
                    ref={ref => this.listView = ref}
                    header={this._header.bind(this)}
                    onFetch={this.fetchData}
                    keyExtractor={(item, index) => `${index} - ${item}`}
                    refreshable={true}
                    allLoadedText={'我是有底线的'}
                    // paginationAllLoadedView={this.renderPaginationFetchingView}
                    waitingSpinnerText={'加载更多'}
                    item={this.renderItem.bind(this)}
                    pagination={true}
                    separator={this._separator.bind(this)}
                />

                {/* <UltimateListView
                    ref={ref => (this.listView = ref)}
                    onFetch={this.onFetch}
                    keyExtractor={(item, index) => item + index}
                    item={item => this.renderItem(item)} // this takes three params (item, index, separator)
                    paginationAllLoadedView={() => (<ToLogin
                        emptyView={() => ViewUtils.renderListFooter()}
                        {...this.props}
                    />)
                    }
                    waitingSpinnerText={"正在加载更多..."}
                    separator={ViewUtils.itemSeparatorComponent}
                /> */}
            </View>
        );
    }
}
