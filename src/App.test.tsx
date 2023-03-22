import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders the RegisterCardForm component', () => {
    render(<App />)
    const registerCardFormElement = screen.getByText(/Register Card Form/i)
    expect(registerCardFormElement).toBeInTheDocument()
  })
})

// 404 page should be implemented
