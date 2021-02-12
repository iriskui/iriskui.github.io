import React from 'react';
import styles from './style.less';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComp = () => {
  return (
    <Footer style={{ textAlign: 'center' }} className={styles.footer}>
      <p>Copyright © 2021, SuKui. All Rights Reserved.</p>
      <p className="notice">Copyright Notice</p>
      <p>
        SuKui copyrights all the art works of this website. No part of any of
        these works may be reproduced in any form or means, without the prior
        written consent of SuKui.
      </p>
    </Footer>
  );
};

export default FooterComp;
