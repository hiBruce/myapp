import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    DeviceEventEmitter,
    Platform
} from 'react-native'

import Images from '../../../res/styles/Images';

import DragSortableView from 'react-native-drag-sort'
const { width, height } = Dimensions.get('window');

const parentWidth = width
const childrenWidth = 74
const childrenHeight = 74
const marginChildrenTop = 10
const marginChildrenBottom = 0
const marginChildrenLeft = 0
const marginChildrenRight = (width - 30 - 76 * 4) / 3.0

export default class AllFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdited: false,
            myDataSource: [],
            allDataSource: [],
            scrollEnabled: true,
            // msgState: false,
            caseLocation: '',
        }
    }
    _onShow(item) {
        this.setState({
            isEdited: false,
            myDataSource: item.myDataSource,
            allDataSource: item.allDataSource,
            // msgState: item.msgState,
            caseLocation: item.caseLocation,
        })
        this.canClick = true;
    }

    _onClose() {
        this.setState({
            isEdited: false
        })
    }

    //新增或者删除我的应用数据
    _changeMyDataSource(item, result) {
        if (result) {
            //删除
            if (this.state.myDataSource.length == 1) {
                return
            }
            let newData = this.state.myDataSource.filter((data) => {
                return data.appId != item.appId;
            })
            this.setState({
                myDataSource: newData
            })
        } else {
            //添加
            if (this.state.myDataSource.length <= 6) {
                this.state.myDataSource.push(item);
                this.setState({
                    myDataSource: this.state.myDataSource
                })
            } else {
            }
        }


    }

    //  编辑/完成
    _clickEdit() {

        if (this.canClick && this.state.isEdited) {
            //编辑状态，点击完成
            let appIds = ''
            this.state.myDataSource.map((item, index) => {
                if (index == 0) appIds = item.appId;
                else appIds = appIds + "," + item.appId
            })
            this.canClick = false
        } else {
            this.setState({
                isEdited: true
            })
        }

    }

    _itemView(item, index) {

        let imageUrl = item.logImg1
        if (this.props.theme == 'blue') {
            imageUrl = item.logImg2
        } else if (this.props.theme == 'dark') {
            imageUrl = item.logImg3
        }
        if (this.state.isEdited) {
            let result = this.state.myDataSource.some(data => {
                if (data.appId == item.appId) {
                    return true;
                }
            })
            //编辑状态下
            return (
                <View key={item.appId} style={{ width: childrenWidth, height: childrenHeight, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.home.functionFBC, borderRadius: 8 }} >
                    <TouchableOpacity style={styles.icon_view} onPress={() => {
                        this._changeMyDataSource(item, result)
                    }}>
                        <Image source={result ? Images.home.jian_slices : Images.home.jia_slices} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.item, { backgroundColor: this.props.home.functionFBC, alignItems: 'center' }}>
                        <Image style={{ width: 32, height: 32 }} source={{ uri: imageUrl || '' }} defaultSource={Images.home.icon_default} />
                        <Text style={{ marginTop: 10, color: this.props.font_color, fontSize: 11 }} numberOfLines={1}>{item.appName}</Text>
                        {/* {
                            //未读信息小红点提示 this.state.msgState
                            this.state.caseLocation != '1' && (item.appName == '案例集锦') && <View style={styles.dot} />
                        } */}
                    </View>

                </View>
            )
        } else {
            return (
                <View key={item.appId} style={{ width: childrenWidth, height: childrenHeight, justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: 32, height: 32 }} source={{ uri: imageUrl || '' }} defaultSource={Images.home.icon_default} />
                    <Text style={{ marginTop: 10, color: this.props.font_color, fontSize: 11 }} numberOfLines={1}>{item.appName}</Text>
                    {/* {
                        this.state.caseLocation != '1' && (item.appName == '案例集锦') && <View style={styles.dot} />
                    } */}
                </View>
            )
        }

    }

    _myFunctionView() {
        return (
            <View style={{}}>
                <Text style={{ color: this.props.home.functionHintColor, fontSize: 14, fontWeight: 'bold' }}>我的应用
                <Text style={{ color: this.props.home.functionHintColor, fontSize: 11 }}>（长按图标可拖动调整顺序 ）</Text>
                </Text>
                <DragSortableView
                    dataSource={this.state.myDataSource}
                    sortable={this.state.isEdited}
                    // parentWidth={parentWidth}
                    childrenWidth={childrenWidth}
                    childrenHeight={childrenHeight}
                    marginChildrenTop={marginChildrenTop}
                    // marginChildrenBottom={marginChildrenBottom}
                    // marginChildrenLeft={marginChildrenLeft}
                    marginChildrenRight={marginChildrenRight}
                    onDragStart={(startIndex, endIndex) => {
                        this.setState({ scrollEnabled: false })
                    }}
                    onDragEnd={(fromIndex, toIndex) => {
                        // console.log("fromIndex==="+fromIndex+"toIndex===="+toIndex);
                        let arr = Object.assign([], this.state.myDataSource);
                        // console.log("arr======"+JSON.stringify(arr));
                        const fromItem = arr[fromIndex];
                        const toItem = arr[toIndex];
                        let newArr = arr.filter((value, index) => {
                            return index != fromIndex
                        })
                        // console.log("newArr======"+JSON.stringify(newArr));
                        let newIndex = newArr.indexOf(toItem);
                        if (fromIndex > toIndex) {
                            newArr.splice(newIndex, 0, fromItem)
                        } else if (fromIndex < toIndex) {
                            newArr.splice(++newIndex, 0, fromItem)
                        } else {
                            newArr.splice(toIndex, 0, fromItem)
                        }
                        this.setState({
                            scrollEnabled: true,
                            myDataSource: newArr
                        })
                    }}
                    onDataChange={(data) => {
                        // delete or add data to refresh
                        // debugger
                        // if (data.length != this.state.myDataSource.length) {
                        //     this.setState({
                        //         myDataSource: data
                        //     })
                        // }

                    }}
                    onClickItem={(data, item, index) => {
                        if (!this.state.isEdited) {
                            this.props.onClickItem && this.props.onClickItem(item)
                        }
                    }}
                    keyExtractor={(item, index) => item.appId} // FlatList作用一样，优化
                    renderItem={(item, index) => {
                        return this._itemView(item, index)
                    }}
                />

            </View>
        )


    }

    _allFunctionView() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: this.props.home.functionHintColor, fontSize: 14, fontWeight: 'bold' }}>更多应用</Text>
                <DragSortableView
                    dataSource={this.state.allDataSource}
                    sortable={false}
                    parentWidth={parentWidth}
                    childrenWidth={childrenWidth}
                    childrenHeight={childrenHeight}
                    marginChildrenTop={marginChildrenTop}
                    marginChildrenBottom={marginChildrenBottom}
                    marginChildrenLeft={marginChildrenLeft}
                    marginChildrenRight={marginChildrenRight}

                    onDragStart={(startIndex, endIndex) => {
                        // this.setState({ scrollEnabled: false })
                    }}
                    onDragEnd={(startIndex) => {
                        // this.setState({ scrollEnabled: true })
                    }}
                    onDataChange={(data) => {

                    }}
                    onClickItem={(data, item, index) => {
                        if (!this.state.isEdited) {
                            this.props.onClickItem && this.props.onClickItem(item)
                        }

                    }}
                    keyExtractor={(item, index) => item.appId} // FlatList作用一样，优化
                    renderItem={(item, index) => {
                        return this._itemView(item, index)
                    }}
                />

            </View>
        )
    }

    render() {
        return (
            <View>
                <View style={{ padding: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: 25 }} onPress={() => { this._onClose() }}>
                            <Image source={Images.home.guanbi_slices}></Image>
                        </TouchableOpacity>
                        <Text style={{ color: this.props.font_color, fontSize: 17, fontWeight: 'bold' }}>全部应用</Text>
                        <TouchableOpacity onPress={() => {

                            this._clickEdit();
                        }}>
                            <Text style={{ color: this.props.my.SMSActiveTextColor, fontSize: 15 }}>{this.state.isEdited ? '完成' : '编辑'}</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ flex: 1, marginTop: 15 }}
                        scrollEnabled={this.state.scrollEnabled}
                    >
                        {this._myFunctionView()}
                        {this._allFunctionView()}
                    </ScrollView>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: 69,
        height: 69,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowColor: '#787878',
        elevation: 2,
    },
    icon_view: {
        zIndex: 999,
        position: 'absolute',
        top: 0,
        right: 0,
        width: 20,
        height: 20,
        alignItems: 'flex-end',
        elevation: (Platform.OS === 'android') ? 50 : 0
    },
    icon: {
        width: 10,
        height: 10,
    },
    dot: {
        position: 'absolute',
        top: 8,
        // right: (width - 30) / 4.0 / 2.0 - 2,
        right: ((width - 30) / 4.0 - 32) / 2.0 - 16,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ff4042',
    },

})
