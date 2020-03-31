import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import TimeAxis from './TimeAxis'
export default class Button extends Component {
    render() {
        let invoice = [{ id: 111, content: '余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！', ctime: '2017-1-11 17:59' },
        { id: 222, content: '快递已达成都', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达四川', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达武汉', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达天津', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达北京', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已打包', ctime: '2017-1-10 17:59' }];

        let source = [
            { Text: "余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！", Time: "2017-06-02 11:49:00" },
            { Text: "[北京市]XX快递 北京XX中心收件员XX已揽件", Time: "2017-06-02 15:49:05" },
            { Text: "[北京市]北京XX中心已发出", Time: "2017-06-02 16:20:11" },
            { Text: "[北京市]快件已到达XX站点", Time: "2017-06-02 20:15:04" },
            { Text: "[北京市]XX站点员：XXX正在派件", Time: "2017-06-03 07:35:18" },
            { Text: "[北京市]已完成", Time: "2017-06-03 08:21:48" }
        ]

        // let items = [];
        // invoice.map((el, index) => {
        //     let backgroundColor = index === invoice.length - 1 ? 'transparent' : '#7CCB00';
        //     items.push(
        //         <View style={styles.expressItem} key={index}>
        //             <View style={{ position: 'relative', paddingTop: 10, flexDirection:'row', alignItems:'center' }}>
        //                 <Text style={{ marginRight: 10}}>哈哈</Text>
        //                 <View style={styles.expressLeft} />
        //             </View>
        //             <View style={[styles.expressRightFirst, { borderLeftColor: backgroundColor }]}>
        //                 <View style={styles.process}>
        //                     <Text style={{ color: '#333', fontSize: 14 }}>{el.content}</Text>
        //                     <Text style={{ color: '#333', fontSize: 12 }}>{el.ctime}</Text>
        //                 </View>
        //             </View>
        //         </View>
        //     );
        // });
        return (
            <View style={styles.content}>
                {/* {items} */}
                <TimeAxis
                    itemStyle={{}}
                    rowHeight={60}
                    dataSource={source}
                    row={(rowData, i, count) => {
                        var fontColor = '#757575';
                        if (i == 0) {
                            fontColor = 'green';
                        }
                        return (
                            <View style={{ flex:1, padding: 5 }}>
                                <Text style={{ color: fontColor, flex: 1 }}>{rowData.Text}</Text>
                                <Text style={{ color: fontColor, alignItems: 'flex-end' }}>{rowData.Time}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        )
    }
}
const styles = {
    process: {
        paddingVertical: 10,
        flexDirection: 'column',
        borderBottomColor: '#D0D6D9',
        borderBottomWidth: 1,
        paddingRight: 20
    },
    expressRightFirst: {
        flex: 1,
        paddingLeft: 25,
        borderLeftWidth: 1,
        flexDirection: 'column'
    },
    content: {
        marginLeft: 10,
        flexDirection: 'column',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#D0D6D9',
        marginTop: 10
    },
    expressItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    expressLeft: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#7CCB00',
        position: 'relative',
        // top: 20
    },
}