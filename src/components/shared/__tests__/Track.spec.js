/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom';
import Track from '../Track'
import * as mocks from './trackMocks'

window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

describe('Track', () => {
  test('renders App component', () => {
    render(
      <Router>
        <Track
          track={mocks.trackMock1}
          currentTrack={mocks.currentPausedMock}
          album={mocks.albumMock}
          onPlay={jest.fn()}
          onEnd={jest.fn()}
        />
      </Router>,
    )
  })
  test('changes icon when clicking play', () => {
    render(
      <Router>
        <Track
          track={mocks.trackMock1}
          currentTrack={mocks.currentPausedMock}
          album={mocks.albumMock}
          onPlay={jest.fn()}
          onEnd={jest.fn()}
        />
      </Router>,
    )
  })
})
