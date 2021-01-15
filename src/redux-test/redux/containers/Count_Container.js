import Count from '../Count'
//移入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//使用connect()()创建并暴露一个Count的容器组件
export default connect()(Count)