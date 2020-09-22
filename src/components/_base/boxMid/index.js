import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BoxMid = ({ children }) => {
    return <div className="box__mid">{children}</div>;
};

BoxMid.propTypes = {
    children: PropTypes.node,
};

export default memo(BoxMid);
