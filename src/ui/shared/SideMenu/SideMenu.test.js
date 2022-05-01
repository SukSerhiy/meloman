import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from "history";
import SideMenu from './SideMenu'

let user;

const renderDefault = () => {
  render(<SideMenu />, {
    wrapper: MemoryRouter
  });
}

describe('SideMenu component', () => {
  beforeAll(() => {
    user = userEvent.setup();
  })

  it('render nav button', () => {
    renderDefault()
    const navButton = screen.getByTestId('nav-button')
    expect(navButton).toBeInTheDocument();
  })

  it('nav panel is not initially visible', () => {
    renderDefault()
    const navPanel = screen.getByTestId('nav-panel')
    expect(navPanel).not.toBeVisible();
  })

  it('nav panel is visible after first click on button', async () => {
    renderDefault()
    const navButton = screen.getByTestId('nav-button')
    await user.click(navButton);
    const navPanel = screen.getByTestId('nav-panel')
    expect(navPanel).toBeVisible()
  })

  it('nav panel is not visible after second click on button', async () => {
    renderDefault()
    const navButton = screen.getByTestId('nav-button')
    await user.click(navButton);
    await user.click(navButton);
    const navPanel = screen.getByTestId('nav-panel')
    expect(navPanel).not.toBeVisible()
  })

  it('go to albums url when clicking to "Search Releases"', async () => {
    const history = createMemoryHistory()
    render(<Router history={history}>
      <SideMenu />
    </Router>);
    const searchReleases = screen.getByText(/Search Releases/i);
    await user.click(searchReleases)
    expect(history.location.pathname).toMatch('/albums')
  })

  it('go to albums url when clicking to "Search Artists"', async () => {
    const history = createMemoryHistory()
    render(<Router history={history}>
      <SideMenu />
    </Router>);
    const searchArtists = screen.getByText(/Search Artists/i);
    await user.click(searchArtists)
    expect(history.location.pathname).toMatch('/artists')
  })

  it ('change color of nav link when pathing to it\'s route', async () => {
    const history = createMemoryHistory()
    render(<MemoryRouter history={history}>
      <SideMenu />
    </MemoryRouter>);
    const searchArtists = screen.getByText(/Search Artists/i);
    await user.click(searchArtists)
    const navButton = screen.getByTestId('nav-button')
    await user.click(navButton);
    await expect(searchArtists).toHaveStyle('color: yellow')
  })
})
