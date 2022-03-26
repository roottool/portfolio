import { createStitches } from '@stitches/react'

export const MAX_SMARTPHONE_SIZE = 768
export const MIN_TABLET_SIZE = 769

export const { css, styled } = createStitches({
  media: {
    bp2: '(max-width: 769px)',
  },
})
