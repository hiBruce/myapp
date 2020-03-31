import React, { Component } from 'react'
import {
    View,
    ART,
    StyleSheet,
    Dimensions,
    Text,
    PanResponder,
    Animated,
    FlatList,
    NativeModules
} from 'react-native'


var {
    Surface,
    Shape,
    Path
} = ART;

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

var path;
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
export default class SinglePointAnim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeX: 0,
            changeY: 0,
        }
    }

    _onLayout = (e) => {
        NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
            console.log(`gestureState.dx : ${pageX}   gestureState.dy : ${pageY}  width : ${width}  height : ${height}`);
            // alert(pageX + '---' + pageY)
            this.setState({
                changeX: 5,
                changeY: pageY+10,
            })
        })
    }

    renderRow = (item, index) => {
        return (<View style={{ width: 10, alignItems: 'center', justifyContent: 'center' }} onLayout={index==dataAry.length-1&&this._onLayout}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#7CCB00', marginTop: 5 }}></View>
        </View>)
    }
    render() {
        path = Path()
            .moveTo(5, 10)
            .lineTo(this.state.changeX, this.state.changeY);

        return (
            <View style={styles.container}>
                <FlatList
                    data={dataAry}
                    renderItem={({ item, index }) => this.renderRow(item, index)}
                    keyExtractor={(item, index) => item + index} />
                <View style={{position:'absolute'}}>
                    <Surface width={deviceWidth} height={deviceHeight}>
                        <Shape d={path} stroke="#000000" strokeWidth={1} />
                    </Surface>
                </View>
            </View>
        );
    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        width: 100,
        height: 100
    }
});