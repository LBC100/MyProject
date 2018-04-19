import React from 'react';
import dva, { connect } from 'dva';

const app = dva();

// namespace: 'count',
//   state: 0,
//   reducers: {
//     add  (count) { return count + 1 },
//     minus(count) { return count - 1 },
//   },

const model1 = {
  namespace: 'count',
  state: {
    text: '打印',
    num: 0
  },
  reducers: {
    add (state) { return {
        ...state,
        num: state.num + 1
      } 
    },
    minus (state) { return {
          ...state,
          num: state.num - 1
      } 
    }
  }
}

const model2 = {
  namespace: 'clg',
  state: {
    text: '字符串',
    num: 234
  }
}

app.model(model1);
app.model(model2);







// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');