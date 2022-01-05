import { render, screen } from '@testing-library/react'
import { PostCard } from '.'
import { postCardPropsMock } from './Mock'

const props = postCardPropsMock

describe('<PostCard>', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props}/>)
    expect(screen.getByText('body1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const  { container } = render(<PostCard {...props}/>)
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()

  })
})
