/**
 * Created by shaotingzhou on 2017/7/10.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    ART,
    NativeModules
} from 'react-native';
const { Surface, Shape, Path } = ART;
var { width, height } = Dimensions.get('window');
var dataAry = [
    {
        "id": 1,
        "time": "01-05",
        "content": "今天,带二哈去节育,再不节育的话,就要被泰迪榨干了(ps:只有累死的牛,没有耕坏的地),关键一路上,那只小区里面的泰迪一路尾随.....这..这个.这是哪个女人养的泰迪,请告诉我你的职业和联系方式,你对我二哈做的,我十倍还你!!!夕阳西下,俩狗一路走,二哈好像知道自己的下场,一脸委屈的看着我,就像许仙看法海似得看着我,二哈,不是哥不成全你们俩,而是哥看着你心疼啊...........",
    },
    {
        "id": 2,
        "time": "01-04",
        "content": "今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪",
    },
    {
        "id": 3,
        "time": "01-03",
        "content": "今天上班,把狗丢在家里,回来家没了~~~今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪",
    },
    {
        "id": 4,
        "time": "01-02",
        "content": "今天是2017年的第二天,两只单身狗在家附近的公园里的亭子躲雨,然后,来了只泰迪.然后亭子里就剩一只单身狗了(ps:我😆).......今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪",
    },
    {
        "id": 6,
        "time": "12-28",
        "content": "养狗前,钱是我的,养狗后,钱是它的~今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪",
    },
    {
        "id": 7,
        "time": "12-25",
        "content": "今天下大雨,适合逛街,途中,遇见了一只二哈,于是花了2000买了下来今天在家躺尸,二哈在家吃刚买的狗粮,我蹲在旁边看着它吃,二哈看看我,看看碗,于是往旁边挪了挪",
    }
]
var path;
export default class TimerShaft extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataAry: dataAry,
            changeX: 0,
            changeY: 0,

        };
    }

    componentDidMount() {

    }


    render() {
        path = Path()
            .moveTo(this.state.changeX, 10)
            .lineTo(this.state.changeX, this.state.changeY);
        return (<View style={{ flex: 1 }}>
            <View style={{ position: 'absolute' }}>
                <Surface width={width} height={height}>
                    <Shape d={path} stroke="#7CCB00" strokeWidth={1} />
                </Surface>
            </View>
            <FlatList
                data={this.state.dataAry}
                renderItem={({ item, index }) => this.renderRow(item, index)}
                keyExtractor={this.keyExtractor} />
            {/* <View style={{ width: 1, height: '100%', backgroundColor: '#7CCB00', position: 'absolute', left: 40, top: 5, marginBottom: 10 }}></View>  */}
            {/* <View style={{ width: 1, height: height, backgroundColor: '#7CCB00', position: 'absolute', left: 50 }}></View> */}
        </View>);
    }

    _onLayout = (e, index) => {
        if (index == dataAry.length - 1) {
            NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                console.log(`gestureState.dx : ${pageX}   gestureState.dy : ${pageY}  width : ${width}  height : ${height}`);
                // alert(pageX + '---' + pageY)
                this.setState({
                    changeX: pageX + 5,
                    changeY: pageY,
                })
            })
        }
    }

    renderRow = (item, index) => {
        let backgroundColor = index === this.state.dataAry.length - 1 ? 'transparent' : '#7CCB00';
        let lineColor = index === this.state.dataAry.length - 1 ? 'transparent' : '#7CCB00';
        return (
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                {/*左边*/}
                <Text>{item.time}</Text>
                {/*中间*/}
                <View style={{ width: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#7CCB00', marginTop: 5 }} onLayout={(e) => {
                        if (index == dataAry.length - 1) {
                            NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                                console.log(`gestureState.dx : ${pageX}   gestureState.dy : ${pageY}  width : ${width}  height : ${height}`);
                                // alert(pageX + '---' + pageY)
                                this.setState({
                                    changeX: pageX + 5,
                                    changeY: pageY,
                                })
                            })
                        }
                    }}></View>
                    {/* {index == this.state.dataAry.length - 1  ? null : } */}
                    {/* <View style={{ width: 1, flex: 1, backgroundColor: backgroundColor}}></View> */}
                </View>
                {/*右边*/}
                <View style={{ marginLeft: 5 }}>
                    <Text>{item.content}</Text>
                    <View style={{ height: 1, backgroundColor: '#D5DCDE' }}></View>
                </View>
            </View>
        )
    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }

    onLayout = (event) => {
        console.log(event.nativeEvent.layout.height)
    }

    renderImg = (imgAry) => {
        var renderAry = []
        for (var i = 0; i < imgAry.length; i++) {
            if (imgAry.length == 1) {
                renderAry.push(
                    <Image key={i} source={{ uri: imgAry[0].url }} style={{ width: 200, height: 200 }} />
                )
            } else if (imgAry.length == 2 || imgAry.length == 4) {
                renderAry.push(
                    <Image key={i} source={{ uri: imgAry[i].url }} style={{ width: (width - 70) * 0.5 - 2, height: (width - 70) * 0.5 - 2, marginLeft: 1, marginTop: 1 }} />
                )
            } else {
                renderAry.push(
                    <Image key={i} source={{ uri: imgAry[i].url }} style={{ width: (width - 70) / 3 - 2, height: (width - 70) / 3 - 2, marginLeft: 1, marginTop: 1 }} />
                )
            }
        }

        return renderAry
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});