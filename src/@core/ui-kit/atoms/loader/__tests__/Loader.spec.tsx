import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Loader, Props } from '../Loader'

describe('[Loader]', () => {
  let wrapper: ShallowWrapper<Props>

  beforeEach(() => {
    wrapper = shallow(<Loader />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when label set', () => {
    beforeEach(() => {
      wrapper = shallow(<Loader>New Label</Loader>)
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
