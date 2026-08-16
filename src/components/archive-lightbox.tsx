import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import { ArchiveArt } from './archive-art'
import { archiveFrames, type ArchiveFrame } from '../content/archive'

type ArchiveSlide = {
  type: 'archive-art'
  frame: ArchiveFrame
}

declare module 'yet-another-react-lightbox' {
  interface SlideTypes {
    'archive-art': ArchiveSlide
  }
}

const slides: ArchiveSlide[] = archiveFrames.map((frame) => ({ type: 'archive-art', frame }))

export function ArchiveLightbox({ index, onClose }: Readonly<{
  index: number
  onClose: () => void
}>) {
  return (
    <Lightbox
      animation={{ fade: 240, swipe: 340 }}
      carousel={{ padding: '12%', preload: 2 }}
      className="archive-yarl"
      close={onClose}
      index={index}
      labels={{ Close: 'Close frame', Next: 'Next frame', Previous: 'Previous frame' }}
      open
      render={{
        slide: ({ slide }) => (
          slide.type === 'archive-art' ? (
            <div className="archive-yarl-slide">
              <ArchiveArt frame={slide.frame} large />
              <div className="archive-yarl-caption">
                <p>{slide.frame.caption}</p>
                <span>FRAME {slide.frame.label}/12</span>
              </div>
            </div>
          ) : undefined
        ),
      }}
      slides={slides}
    />
  )
}
