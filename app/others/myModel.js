import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import RadioView from './RadioView'
export default class myModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible:false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { }}>
                    <Text>点击</Text>
                </TouchableOpacity>
                <Modal
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    backdropColor={'#333'}
                    backdropOpacity={0.6}
                    isVisible={this.state.isVisible}
                    onBackButtonPress={() => this.setState({
                        isVisible: false
                    })}
                    onBackdropPress={() => this.setState({
                        isVisible: false
                    })}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 4 }}>
                        <Text style={{ fontSize: 20, color: '#333', padding: 15 }}>退订</Text>
                        <View style={{ height: 1, backgroundColor: '#E9ECF0' }}></View>
                        {this.item('手机号码:', '1393 7128 180')}
                        {this.item('商品名称:', '视频彩铃')}
                        {this.item('失效方式:', '')}
                        <View style={styles.optOutItem}>
                            <Text style={{ fontSize: 20, color: '#333', marginRight: 10 }}>验证方式:</Text>
                            <RadioView id={1} option={'声纹'} onCheck={this.checkCallBack} radius={16}
                                checked={this.state.flag === 1} />
                            <RadioView id={2} option={'服务密码'} onCheck={this.checkCallBack} radius={16}
                                checked={this.state.flag === 2} />
                            <RadioView id={3} option={'身份证'} onCheck={this.checkCallBack} radius={16}
                                checked={this.state.flag === 3} />
                            <RadioView id={4} option={'不认证'} onCheck={this.checkCallBack} radius={16}
                                checked={this.state.flag === 4} />
                        </View>
                        {this.item('验证结果:', '无验证')}
                        <View style={styles.optOutItem}>
                            <Text style={{ fontSize: 20, color: '#333', marginRight: 10 }}>备注信息:</Text>
                            <TextInput
                                style={{ borderRadius: 4, borderWidth: 1, borderColor: '#e6e6e6', width: 500, height: 100 }}
                                textAlignVertical={'top'}
                                maxLength={200}
                                multiline={true}
                                keyboardType={'default'}
                                autoCapitalize="none"
                                onChangeText={(text) => { }}
                            />
                        </View>
                        <View style={{ height: 1, backgroundColor: '#E9ECF0' }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: '#F7F9FA' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#0080D9', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 4 }}
                                onPress={() => this.exitOut()}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>确定</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ paddingVertical: 10, paddingHorizontal: 40, borderRadius: 4, borderWidth: 1, borderColor: '#0080D9', marginLeft: 40 }}
                                onPress={() => this.setState({
                                    isVisible: false
                                })}>
                                <Text style={{ color: '#0080D9', fontSize: 18 }}>取消</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})