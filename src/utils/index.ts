import { SEARCH_URL } from '../constants'

export const createSearchQuery = (
  titleValue: string,
  authorValue: string,
  subjectValue: string
) =>
  [
    { name: 'title', value: titleValue },
    { name: 'author', value: authorValue },
    { name: 'subject', value: subjectValue },
  ].reduce(
    (acc, { name, value }) => (value ? `${acc}&${name}=${value}` : acc),
    ''
  )

export const createExploreQuery = (subjects: string[]) =>
  subjects
    .reduce(
      (acc, subject, i) => `${acc}${i === 0 ? '' : '+'}subject:${subject}`,
      'q='
    )
    .concat('&mode=everything')

export const createGeneralQuery = (query: string) =>
  `${SEARCH_URL}${encodeURI(query)}`
