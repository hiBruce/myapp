import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native'
export default class Button extends Component {
    render() {
        let invoice = [{ id: 111, content: '余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！余额宝分流50%，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态，客户疑问描述：请根据客户描述的疑问详情进行记录，请填写客户其他情况，BOSS用户状态。请处理，谢谢！', ctime: '2017-1-11 17:59' },
        { id: 222, content: '快递已达成都', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达四川', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达武汉', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达天津', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已达北京', ctime: '2017-1-10 17:59' },
        { id: 222, content: '快递已打包', ctime: '2017-1-10 17:59' }];
        let items = [];
        invoice.map((el, index) => {
            let colorValue = index === 0 ? '#0b74c4' : '#888';
            let backgroundColor = index === 0 ? '#0b74c4' : '#e0e0e0';
            items.push(
                <View style={styles.expressItem} key={index}>
                    <View style={styles.expressRightFirst}>
                        <View style={styles.process}>
                            <Text style={{ color: colorValue, fontSize: 14 }}>{el.content}</Text>
                            <Text style={{ color: colorValue, fontSize: 12 }}>{el.ctime}</Text>
                        </View>
                    </View>
                    <View style={[styles.expressLeft, { backgroundColor: backgroundColor }]} />
                </View>
            );
        });
        return (
            <View style={styles.content}>
                {items}
            </View>
        )
    }
}
const styles = {
    process: {
        paddingVertical: 10,
        flexDirection: 'column',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingRight: 20
    },
    expressRightFirst: {
        width: Dimensions.get('window').width,
        paddingLeft: 25,
        borderLeftWidth: 1,
        borderLeftColor: '#e0e0e0',
        flexDirection: 'column'
    }, content: {
        marginLeft: 10,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        marginTop: 10
    },
    expressItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        width: Dimensions.get('window').width
    },
    expressLeft: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        position: 'relative',
        right: Dimensions.get('window').width + 4,
        // top: 20
    },
}