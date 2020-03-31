/**
 * @format
 */

import {AppRegistry} from 'react-native';
import time from './app/countTime/time';//倒计时
import webview from './webview';//显示webview文件上传
import App from './src/pages/dragView';//拖拽
import CrossArea from './app/drag/draggable';//拖拽
import CommonSortPage from './app/drag/CommonSortPage';//拖拽
import CommonDragPage from './app/drag/CommonDragPage';//拖拽
import DraggableBoard from './app/drag/DraggableBoard';//拖拽
import BasicDragExample from './app/drag/BasicDragExample';//拖拽
import deletionExample from './app/drag/deletionExample';//拖拽
import OrderContentPage from './app/drag/OrderContentPage';//拖拽
import labelEdit from './app/drag/labelEdit';//拖拽
import customAnimationExample from './app/drag/customAnimationExample';//拖拽
import indexDragger from './app/drag/indexDragger';//拖拽
import html from './app/drag/html';//拖拽
import Tab from './app/drag/TabView';//拖拽
import AwesomeProject from './app/others/AwesomeProject';//setNativeProps用法
import PopoverExample from './app/others/PopoverExample';//气泡
import CountDownPage from './app/countTime/CountDownPage';//倒计时
import CountDown from './app/countTime/demo';//倒计时
import Track from './App/track/TimerShaft';//跟踪痕迹
import MyTrack from './App/track/MyTrack';//跟踪痕迹
import line from './App/track/line';//跟踪痕迹
import scroll from './App/others/scroll';//解决滑动和list的滑动冲突
import LoadMoreDemo from './App/loadMore/LoadMoreDemo';//加载更多
import TestScreen from './App/loadMore/TestScreen';//加载更多
import MoreDemo from './App/loadMore/MoreDemo';//加载更多
import MoreFlatList from './App/loadMore/MoreFlatList';//加载更多
import LoadMore from './App/loadMore/LoadMore';//加载更多
import ultimate from './App/loadMore/ultimate';//加载更多
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyModel);
