// 合并所有 reducers 导出去让 store 使用

import {combineReducers} from 'redux'
import {userInfo} from './userInfo'

export default combineReducers({
	userInfo
})
