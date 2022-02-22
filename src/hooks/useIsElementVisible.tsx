import { RefObject, useEffect } from 'react'

type Options = {
  root?: Element | null
  rootMargin?: string
  threshold?: number
}

const defaultOptions: Options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}

const useIsElementVisible = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  options = defaultOptions
) => {
  const { root, rootMargin, threshold = 1 } = options

  useEffect(() => {
    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) {
          callback()
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )
    node && observer.observe(node)

    return () => {
      node && observer.unobserve(node)
    }
  }, [callback, ref, root, rootMargin, threshold])
}

export default useIsElementVisible
