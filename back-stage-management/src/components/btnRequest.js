import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCeators from '../actionCeators/actionCeators';
import * as urlActions from '../actionCeators/urlActions';

console.log(urlActions)
class Btns extends Component {
    render() {
        let { actions, urlActions } = this.props;
        console.log(this.props)
        return (
            <div>
                {/* 
                    发送请求数据的urlAction，这里统一用AXIOS_DATA发送到store，传入不同的urlAction参数，
                    匹配同一个请求数据的saga任务，把不同的参数传给saga任务。
                    urlAction单独放在一个文件里。
                    
                    这里的action是统一放在actionCeators.js中
                    通过bindActionCreators函数包装成一个函数来调用dispatch，
                    这里可以通过传参把地址传过去。AXIOS_BTN1DATA字段发送到store
                    store添加了saga中间件，并且监听，AXIOS_BTN1DATA传到了sagas.js进行匹配
                    匹配到则运行对应的saga函数。saga运行中取到了数据则再发一条action
                    这次的action发到store转到reducer匹配，匹配到了则更新数据。
                */}
                <button onClick={ () => {actions.axios_data(urlActions.btn1Data)} } >请求数据1</button>
                <button onClick={ () => {actions.axios_data(urlActions.btn2Data)} } >请求数据2</button>
                <br />
                <button onClick={actions.increment} >+</button>
                <button onClick={actions.decrement} >-</button>
                <h1>{this.props.num}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        num: state.changeNum,
        btn1Data: state.btn1Data,
        btn2Data: state.btn2Data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCeators, dispatch),
        urlActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Btns);