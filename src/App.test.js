import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App, { AppRouter } from './App';
import { fetchUsers } from './store/actions'
import { MemoryRouter } from 'react-router-dom'

afterEach(() => cleanup())

jest.mock('./store/actions')
fetchUsers.mockReturnValue({
  type: 'FETCH_USERS',
  payload: {
    users: [
      { id: 1, name: "John Doe" }
    ]
  }
})

test('third h1 shuld be correct', () => {
  const { container } = render(<App />)
  const titleElements = container.querySelectorAll('h1')
  const thirdH1 = titleElements[2]
  expect(thirdH1.textContent).toBe(' homepage 2 ')
})

test(' should render correct users page', () => {
  const { getByTestId, getByText, debug } = render(<App />)
  const linkToUser = getByTestId('user-page-btn')
  fireEvent.click(linkToUser)
  // debug()
  const userPageTitle = getByText(/Users Page/i)
  expect(userPageTitle).toBeInTheDocument()
})


test(' users page should display correct data from API', () => {
  const { getByTestId, getByText } = render(<App />)
  const linkToUser = getByTestId('user-page-btn')
  fireEvent.click(linkToUser)
  const userName = getByText(/John Doe/i)
  expect(userName).toBeInTheDocument()
})


// CODE NYA GAK TESTABLE

test(' harus di homepage', () => {
  const { getByTestId, debug } = render(
    <MemoryRouter initialEntries={['/']}>
      <AppRouter />
    </MemoryRouter>
  )
  const pageTitle = getByTestId('homepage-title')
  expect(pageTitle).toBeInTheDocument()
})


// MOCKING  - NOT REQUIRED
