import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('My Button', () => {
  afterEach(cleanup)

  test('Render', async () => {
    const onClickMock = jest.fn()
    const { getByTestId, queryByText, rerender } = render(
      <Button handleClick={onClickMock} label="ok" />
    )
    const buttondNode = getByTestId('btn-1')
    fireEvent.click(buttondNode)
    expect(onClickMock).toHaveBeenCalledTimes(1)
    expect(queryByText(/ok/i)).toBeTruthy()
    rerender(<Button label="go" />)
    expect(queryByText(/go/i)).toBeTruthy()
  })

  test('FocusInput matches snapshot', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <Button handleClick={onClickMock} label="ok" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
