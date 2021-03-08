/**
 * ErrorBoundary
 */

import React, { Component } from 'react';
import ErrorStackParser from 'error-stack-parser';
import StackTraceGPS from 'stacktrace-gps';
import PropTypes from 'prop-types';
import { ErrorMessage, ProductionError } from './components';
import css from './ErrorBoundary.css';
import { startCase } from 'lodash-es';

const gps = new StackTraceGPS();
export default class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  static propTypes = {
    children: PropTypes.node,
    forceProductionError: PropTypes.bool,
    onError: PropTypes.func,
    onReset: PropTypes.func,
    resetButtonLabel: PropTypes.node,
    subTitle: PropTypes.node,
    title: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      hasError: false,
      stack: undefined,
    };
  }

  componentDidCatch(error, info) {
    this.handleError(error, info);
  }

  handleError = async (error, info) => {
    if (this.props.onError) {
      this.props.onError(error, info);
    }

    const { stack: errorStack } = error;
    const { componentStack } = info;

    const parsed = await this.parseErrors(error);
    console.log('parsed', parsed);

    const lines = `
      ${errorStack.toString()}
      ${componentStack.toString()}
    `.split('\n')
      // Remove empty lines
      .filter(Boolean);

    const stack = lines
      // Remove the first line because it's the same as the error we get above
      .splice(1, lines.length)
      // Remove whitespace
      .map(str => str.replace(/\s+/, ''))
      .join('\n');

    this.setState({ error: error.toString(), stack });
  }

  parseErrors = async (error) => {
    const stackframes = ErrorStackParser.parse(error);
    const parsed = stackframes.map(async (stackframe) => gps.getMappedLocation(stackframe));
    return Promise.all(parsed);
  }

  renderError = () => {
    const { forceProductionError, title, subTitle, resetButtonLabel, onReset } = this.props;
    const { error, stack } = this.state;
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (isDevelopment && !forceProductionError) {
      return (
        <ErrorMessage
          error={error}
          stack={stack}
        />
      );
    }

    return (
      <ProductionError
        error={error}
        onReset={onReset}
        resetButtonLabel={resetButtonLabel}
        stackTrace={stack}
        subTitle={subTitle}
        title={title}
      />
    );
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className={css.root} data-test-error-boundary>
          {this.renderError()}
        </div>
      );
    }

    return this.props.children;
  }
}
