import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View,
} from 'react-native';
import CountDownReact from './CountDownReact'

//import { Constants } from 'expo';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';


export default class TimeRecorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={[{ paddingTop: 40, marginTop: 70 }]}>
      {/*1.*/}
      <CountDownReact
        //date={new Date(parseInt(seckill.endTime))}
        date="2019-11-28T00:00:00+00:00"
        days={{ plural: 'Days ', singular: 'day ' }}
        hours=':'
        mins=':'
        segs=''

        daysStyle={styles.time}
        hoursStyle={styles.time}
        minsStyle={styles.time}
        secsStyle={styles.time}
        firstColonStyle={styles.colon}
        secondColonStyle={styles.colon}
      />

      {/*2.*/}
      <View style={{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 20,
      }}>
        <Text style={styles.cardItemTimeRemainTxt}>还剩</Text>
        <CountDownReact
          //date={new Date(parseInt(seckill.endTime))}
          date="2019-11-28T00:00:00+00:00"
          days={{ plural: '天 ', singular: '天 ' }}
          hours=':'
          mins=':'
          segs=''

          daysStyle={styles.cardItemTimeRemainTxt}
          hoursStyle={styles.cardItemTimeRemainTxt}
          minsStyle={styles.cardItemTimeRemainTxt}
          secsStyle={styles.cardItemTimeRemainTxt}
          firstColonStyle={styles.cardItemTimeRemainTxt}
          secondColonStyle={styles.cardItemTimeRemainTxt}
        />
      </View>

      {/*3.*/}
      <CountDownReact
        //date={new Date(parseInt(seckill.endTime))}
        date="2019-11-28T00:00:00+00:00"
        days={{ plural: 'D ', singular: 'D ' }}
        hours=':'
        mins=':'
        segs=''

        containerStyle={styles.container}
        daysStyle={styles.text}
        hoursStyle={styles.text}
        minsStyle={styles.text}
        secsStyle={styles.text}
        firstColonStyle={styles.text}
        secondColonStyle={styles.text}
      />


      {/*4.*/}
      <View style={styles.cardItem}>
        <Image source={{ uri: 'http://www.ishuyin.com/data/images/nopic.gif' }}
          style={styles.cardItemMainPic} backgroundColor={'#' + Math.floor(Math.random() * 16777215).toString(16)} />
        <View style={styles.cardItemMask}>
          <View style={styles.cardItemTimer}>
            <Image style={styles.cardItemTimerIcon}
              source={{ uri: 'http://www.qiyipic.com/common/fix/gmjy3/images/groupontimeredicon.png' }} />
            <View style={{
              flexDirection: 'row',
              alignItems: 'baseline'
            }}>
              <Text style={styles.cardItemTimeRemainTxt}>还剩</Text>
              <CountDownReact
                //date={new Date(parseInt(seckill.endTime))}
                date="2019-10-28T00:00:00+00:00"
                days={{ plural: '天 ', singular: '天 ' }}
                hours=':'
                mins=':'
                segs=''

                daysStyle={styles.cardItemTimeRemainTxt}
                hoursStyle={styles.cardItemTimeRemainTxt}
                minsStyle={styles.cardItemTimeRemainTxt}
                secsStyle={styles.cardItemTimeRemainTxt}
                firstColonStyle={styles.cardItemTimeRemainTxt}
                secondColonStyle={styles.cardItemTimeRemainTxt}
              />
            </View>
          </View>

        </View>
      </View>
    </View>
  }
}



const styles = StyleSheet.create({

  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b'
  },
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 20
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  //时间文字
  time: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 12,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  //冒号
  colon: {
    fontSize: 12, color: 'rgba(85, 85, 85, 1)'
  },

  cardItemMask: {
    position: 'absolute',
    top: 15,
    right: 10,
    backgroundColor: 'transparent'
  },
  cardItemTimer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardItemTimerIcon: {
    width: 11,
    height: 11,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    marginTop: 20,
    width: 370,
    height: 370 * 0.65625,
  },
  cardItemMainPic: {
    width: 370,
    height: 370 * 0.65625,
  },
});