import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.bg} >
      234
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
