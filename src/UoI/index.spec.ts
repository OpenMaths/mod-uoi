import { getPropertyByType } from "."
import Sample from "./fixture"

describe("UoI/utils", () => {
  beforeEach(() => {
    this.uoi = Sample.getEmptyUoI()
  })

  afterEach(() => {
    this.uoi = null
  })

  describe("getPropertyByType", () => {
    test("correctly extracts the MarkdownContent Property wrapped in Option if present", () => {
      const MarkdownContentProperty = Sample.getMarkdownContentProperty(
        "Some Property Value",
      )
      this.uoi.properties = [MarkdownContentProperty]
      const subject = getPropertyByType(this.uoi, "MarkdownContent")
      expect(subject.is_some()).toEqual(true)
      const unwrapped = subject.unwrap()
      expect(unwrapped!.id).toEqual(MarkdownContentProperty.id)
      expect(unwrapped!.type).toEqual(MarkdownContentProperty.type)
      expect(unwrapped!.content).toEqual(MarkdownContentProperty.content)
    })

    test("correctly extracts the first MarkdownContent Property wrapped in Option if multiple present", () => {
      const MarkdownContentProperty_1 = Sample.getMarkdownContentProperty(
        "First Property Value",
      )
      const MarkdownContentProperty_2 = Sample.getMarkdownContentProperty(
        "Second Property Value",
      )
      this.uoi.properties = [
        MarkdownContentProperty_1,
        MarkdownContentProperty_2,
      ]
      const subject = getPropertyByType(this.uoi, "MarkdownContent")
      expect(subject.is_some()).toEqual(true)
      const unwrapped = subject.unwrap()
      expect(unwrapped!.id).toEqual(MarkdownContentProperty_1.id)
      expect(unwrapped!.type).toEqual(MarkdownContentProperty_1.type)
      expect(unwrapped!.content).toEqual(MarkdownContentProperty_1.content)
    })

    test("correctly returns None if no MarkdownContent Property present", () => {
      this.uoi.properties = []
      const subject = getPropertyByType(this.uoi, "MarkdownContent")
      expect(subject.is_none()).toEqual(true)
    })

    test("correctly returns None if Incorrect Property type access attempted", () => {
      this.uoi.properties = []
      const subject = getPropertyByType(this.uoi, "Something Else" as any)
      expect(subject.is_none()).toEqual(true)
    })
  })
})
