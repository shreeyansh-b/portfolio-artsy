export type ArchiveFrame = {
  id: string
  label: string
  caption: string
  shape: 'square' | 'tall' | 'wide'
  palette: 'violet' | 'peach' | 'moss' | 'sun' | 'rose' | 'blue'
}

export type ArchiveTheme = {
  id: string
  title: string
  index: string
  note: string
  frames: ArchiveFrame[]
}

export const archiveThemes: ArchiveTheme[] = [
  {
    id: 'soft-focus',
    index: '01',
    title: 'Soft focus',
    note: 'A few frames that chose atmosphere over evidence.',
    frames: [
      { id: 'soft-focus-01', label: '01', caption: 'a window doing its best impression of a memory', shape: 'tall', palette: 'violet' },
      { id: 'soft-focus-02', label: '02', caption: 'the last warm part of an ordinary afternoon', shape: 'wide', palette: 'sun' },
      { id: 'soft-focus-03', label: '03', caption: 'somewhere between purple and blue', shape: 'square', palette: 'blue' },
      { id: 'soft-focus-04', label: '04', caption: 'light caught in the corner of the room', shape: 'square', palette: 'rose' },
    ],
  },
  {
    id: 'in-between',
    index: '02',
    title: 'In between',
    note: 'The part that happens before a plan, after a detour, or in the middle of both.',
    frames: [
      { id: 'in-between-01', label: '05', caption: 'a little space between leaving and arriving', shape: 'wide', palette: 'peach' },
      { id: 'in-between-02', label: '06', caption: 'one more song before the next thing', shape: 'tall', palette: 'moss' },
      { id: 'in-between-03', label: '07', caption: 'the day had a softer edge here', shape: 'square', palette: 'violet' },
      { id: 'in-between-04', label: '08', caption: 'too much colour to call it a coincidence', shape: 'square', palette: 'sun' },
    ],
  },
  {
    id: 'after-the-sun',
    index: '03',
    title: 'After the sun',
    note: 'When the light leaves slowly enough to make everything look possible.',
    frames: [
      { id: 'after-the-sun-01', label: '09', caption: 'the sky kept the receipt', shape: 'tall', palette: 'rose' },
      { id: 'after-the-sun-02', label: '10', caption: 'a quiet kind of orange', shape: 'square', palette: 'peach' },
      { id: 'after-the-sun-03', label: '11', caption: 'blue hour, but not the serious kind', shape: 'wide', palette: 'blue' },
      { id: 'after-the-sun-04', label: '12', caption: 'just enough left to see by', shape: 'square', palette: 'moss' },
    ],
  },
]

export const archiveFrames = archiveThemes.flatMap((theme) => theme.frames)
