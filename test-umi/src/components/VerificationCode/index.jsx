import React, { PureComponent } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'dva';
import { withStateHandlers, compose, lifecycle } from "recompose";


const initialState = {
  status: false,
  defaultValue: '获取验证码',
  countDownNum: 5
};

const onClickButton = (state, props) => (event) => {
  const { dispatch } = props
  dispatch({
    type: 'global/getVerificationCode',
    payload: {},
    callback: (e) => {
      if(e.status == 'success') {
        
        // this.countDown();
        console.log('回调', e)
        // return { status: !state.status }
      }
    }
  })
  console.log(state, props, event,'测试');
  return { status: !state.status }
};

// 生命周期
const tWithData = lifecycle({
  componentDidMount() {
    console.log('加载完成了componentDidMount')
  }
});

const withTextFieldState = withStateHandlers(initialState, {
  onClickButton,
  // incrementOn: ({ status }) => (value) => ({
  //   status: !status,
  // }),
});


const VerificationCodeCompose = compose(
  withTextFieldState,
  tWithData
);


const TestVerification = (props) => {
  console.log(props, 'props结果')
  return (
    <div>
      <input />
      <Button type="primary" onClick={props.onClickButton} loading={initialState.status}>{initialState.defaultValue}</Button>
    </div>
  );
}


class VerificationCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      defaultValue: '获取验证码',
      countDownNum: 5
    }
  }

  countDown = () => {
    let s1 = setInterval(() => {
      this.setState({ countDownNum: this.state.countDownNum - 1 }, ()=>{
        if(this.state.countDownNum < 0) {
          clearInterval(s1);
          this.setState({ status: false, countDownNum: 5 });
        }
      });
    }, 1000);
  }

  onClickButton = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'global/getVerificationCode',
      payload: {},
      callback: (e) => {
        if(e.status == 'success') {
          this.setState({ status: true });
          this.countDown();
        }
        console.log('回调', e)
      }
    })
  }
  
  render() {
    const { loading } = this.props
    console.log('props', this.props)
    return (
      <div>
        <input />
        <Button 
          type="primary" 
          onClick={this.onClickButton} 
          loading={loading.effects['global/getVerificationCode']}
          disabled={this.state.status}
        >
          {this.state.status ? `${this.state.countDownNum}秒后重新获取` : this.state.defaultValue}
        </Button>
      </div>
    );
  }
}
 
// export default VerificationCodeCompose(TestVerification);
// export default connect((store) => (store))(VerificationCode);
export default connect((store) => (store))(VerificationCodeCompose(TestVerification));