import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BoxTop = ({ children }) => {
    return <div className="box__top">{children}</div>;
};

BoxTop.propTypes = {
    children: PropTypes.node,
};

export default memo(BoxTop);
