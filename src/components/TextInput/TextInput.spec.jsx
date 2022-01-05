import { TextInput } from '.'
import { render, screen, userEvent } from "@testing-library/react"

describe('<Posts>', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'testando'} />)

    const input = screen.getByPlaceholderText(/type your search/i)

    expect(input).toBeInTheDocument()
    expect(input.value).toBe('testando')
  })

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} />)

    const input = screen.getByPlaceholderText(/type your search/i)

    const value = 'o valor'

    userEvent.type(input, value)

    expect(input.value).toBe(value)
    expect(input.value).toHaveBeenCalledTimes(value.length)
  })
  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<TextInput handleChange={fn} />)
    expect(container).toMatchSnapshot()
  })
})
