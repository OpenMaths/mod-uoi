import Sample from './fixture'
import * as util from './utils'

describe('UoI/utils', () => {
  describe('getPropertyByType', () => {
    test('correctly extracts the Title Property wrapped in Option if present', () => {
      const TitleProperty = Sample.getTitleProperty('Some Property Value')
      let uoi = Sample.getEmptyUoI()
      uoi.properties = [TitleProperty]
      const subject = util.getPropertyByType(uoi, 'Title')
      expect(subject.is_some()).toEqual(true)
      const unwrapped = subject.unwrap()
      expect(unwrapped!.type).toEqual(TitleProperty.type)
      expect(unwrapped!.value).toEqual(TitleProperty.value)
    })

    test('correctly extracts the first Title Property wrapped in Option if multiple present', () => {
      const FirstLabelProperty = Sample.getLabelProperty('First Property Value')
      const SecondLabelProperty = Sample.getLabelProperty(
        'Second Property Value',
      )
      let uoi = Sample.getEmptyUoI()
      uoi.properties = [FirstLabelProperty, SecondLabelProperty]
      const subject = util.getPropertyByType(uoi, 'Label')
      expect(subject.is_some()).toEqual(true)
      const unwrapped = subject.unwrap()
      expect(unwrapped!.type).toEqual(FirstLabelProperty.type)
      expect(unwrapped!.value).toEqual(FirstLabelProperty.value)
    })

    test('correctly returns None if no Title Property present', () => {
      let uoi = Sample.getEmptyUoI()
      uoi.properties = [] // Just in case..
      const subject = util.getPropertyByType(uoi, 'MarkdownContent')
      expect(subject.is_none()).toEqual(true)
    })
  })
})
