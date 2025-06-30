import { vi } from 'vitest';
import React, { forwardRef, useImperativeHandle } from 'react';

export const continuousStartMock = vi.fn();
export const stopMock = vi.fn();
export const completeMock = vi.fn();

export const TOP_LOADING_BAR_TEXT = 'Mocked top loading bar';

const MockedTopLoadingBar = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    continuousStart: continuousStartMock,
    stop: stopMock,
    complete: completeMock,
  }));
  return <div data-testid="loading-bar">{TOP_LOADING_BAR_TEXT}</div>;
});

export default MockedTopLoadingBar;
