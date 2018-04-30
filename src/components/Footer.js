import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <p className="footer-subtitle">- Custom Built with React.js -</p>
            </div>
        );
    }
}

 Footer.propTypes = propTypes;
 Footer.defaultProps = defaultProps;