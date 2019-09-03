import React, { PureComponent } from 'react';
import { Formik, withFormik } from 'formik';
import {
  BackTop,
  Form,
  Row,
  Col,
  Modal,
  Input,
  Divider,
  Button, message,
  Spin, Table, Tag,
  Select, Checkbox, Radio,
  Tabs, Menu, Dropdown, Icon, Progress, Popover
} from 'antd';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);




const ContactForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
}) => {
  // console.log( handleSubmit,
  //   handleChange,
  //   handleBlur,
  //   values,
  //   errors, '测试1');
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && <div>{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  )
};



// ant组件
export interface AntFormProps {
  
}
 
export interface AntFormState {
  
}
 
class AntForm extends React.Component<AntFormProps, AntFormState> {
  constructor(props: AntFormProps) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, '测试3')
    return (
      <div>
        ant表单
        <form onSubmit={this.props.handleSubmit}>
          用户名: 
          <Input
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.name}
            name="name"
          />
          密码: 
          <Input
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.ps}
            name="ps"
          />
          {this.props.errors.name && this.props.touched.name && <div id="feedback">{this.props.errors.name}</div>}
          <Button type="primary" htmlType="submit">提交</Button>
        </form>
        {/* <form onSubmit={this.props.handleSubmit}>
          用户名: <Input name="name" />
          密码: <Input name="ps"/>
          <Button type="primary" htmlType="submit">提交</Button>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    );
  }
}

const AntFormNew = withFormik({
  mapPropsToValues: () => ({ name: '', ps: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(AntForm)


export interface FormikTestProps {
  
}
 
export interface FormikTestState {
  
}
 
class FormikTest extends React.PureComponent<FormikTestProps, FormikTestState> {
  constructor(props: FormikTestProps) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <div>
        <h3>FormikTest</h3>
        <Basic />
        <Formik 
          component={ContactForm}
          onSubmit={()=>{
            alert(1)
          }}
          onChange={()=>{
            alert(2)
          }}
        />
        
        <AntFormNew />
      </div>
    );
  }
}
 
export default FormikTest;


// const BasicExample = () => (
//   <div>
//     <h1>My Form</h1>
//     <Formik
//       initialValues={{ name: 'jared' }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//       render={props => (
//         <form onSubmit={props.handleSubmit}>
//           <input
//             type="text"
//             onChange={props.handleChange}
//             onBlur={props.handleBlur}
//             value={props.values.name}
//             name="name"
//           />
//           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     />
//   </div>
// );

/* 

<Formik component={ContactForm} />;

const ContactForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      name="name"
    />
    {errors.name && <div>{errors.name}</div>}
    <button type="submit">Submit</button>
  </form>
);

*/

 


// import React from 'react';
// import { withFormik } from 'formik';

// const MyForm = props => {
//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name}
//         name="name"
//       />
//       {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const MyEnhancedForm = withFormik({
//   mapPropsToValues: () => ({ name: '' }),

//   // Custom sync validation
//   validate: values => {
//     const errors = {};

//     if (!values.name) {
//       errors.name = 'Required';
//     }

//     return errors;
//   },

//   handleSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 1000);
//   },

//   displayName: 'BasicForm',
// })(MyForm);