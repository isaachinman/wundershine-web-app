import {
  ASSEMBLY_FRAME,
  ASSEMBLY_ICON,
  ASSEMBLY_SCREEN_1,
  ASSEMBLY_SCREEN_2,
  ASSEMBLY_SCREEN_3,
  FRAGMENT_FRAME,
  FRAGMENT_ICON,
  FRAGMENT_SCREEN_1,
  FRAGMENT_SCREEN_2,
  FRAGMENT_SCREEN_3,
  LORYSTRIPES_FRAME,
  LORYSTRIPES_ICON,
  LORYSTRIPES_SCREEN_1,
  LORYSTRIPES_SCREEN_2,
  LORYSTRIPES_SCREEN_3,
  MIRRORLAB_FRAME,
  MIRRORLAB_ICON,
  MIRRORLAB_SCREEN_1,
  MIRRORLAB_SCREEN_2,
  MIRRORLAB_SCREEN_3,
  PHOTOSHOP_SKETCH_FRAME,
  PHOTOSHOP_SKETCH_ICON,
  PHOTOSHOP_SKETCH_SCREEN_1,
  PHOTOSHOP_SKETCH_SCREEN_2,
  PHOTOSHOP_SKETCH_SCREEN_3,
  PORTRA_FRAME,
  PORTRA_ICON,
  PORTRA_SCREEN_1,
  PORTRA_SCREEN_2,
  PORTRA_SCREEN_3,
  WATERLOGUE_FRAME,
  WATERLOGUE_ICON,
  WATERLOGUE_SCREEN_1,
  WATERLOGUE_SCREEN_2,
  WATERLOGUE_SCREEN_3,
} from 'images'


export default [
  {
    id: 'fragment',
    appName: 'Fragment',
    appCreator: 'Pixite',
    appCreatorLink: 'http://pixiteapps.com/',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/fragment/id767104707?mt=8',
      },
      {
        title: 'Android',
        link: 'https://play.google.com/store/apps/details?id=com.pixite.fragment',
      },
    ],
    images: {
      reframe: FRAGMENT_FRAME,
      appIcon: FRAGMENT_ICON,
      appScreenshot1: FRAGMENT_SCREEN_1,
      appScreenshot2: FRAGMENT_SCREEN_2,
      appScreenshot3: FRAGMENT_SCREEN_3,
    },
  },
  {
    id: 'waterlogue',
    appName: 'Waterlogue',
    appCreator: 'Tinrocket',
    appCreatorLink: 'http://www.tinrocket.com/',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/waterlogue/id764925064?mt=8',
      },
      {
        title: 'Windows 10',
        link: 'https://www.microsoft.com/en-us/p/waterlogue-by-tinrocket/9nblggh69lcl#activetab=pivot:overviewtab',
      },
    ],
    images: {
      reframe: WATERLOGUE_FRAME,
      appIcon: WATERLOGUE_ICON,
      appScreenshot1: WATERLOGUE_SCREEN_1,
      appScreenshot2: WATERLOGUE_SCREEN_2,
      appScreenshot3: WATERLOGUE_SCREEN_3,
    },
  },
  {
    id: 'lorystripes',
    appName: 'Lorystrips',
    appCreator: 'Pixite',
    appCreatorLink: 'http://pixiteapps.com/',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/lorystripes/id724803163?mt=8&ign-mpt=uo%3D4',
      },
    ],
    images: {
      reframe: LORYSTRIPES_FRAME,
      appIcon: LORYSTRIPES_ICON,
      appScreenshot1: LORYSTRIPES_SCREEN_1,
      appScreenshot2: LORYSTRIPES_SCREEN_2,
      appScreenshot3: LORYSTRIPES_SCREEN_3,
    },
  },
  {
    id: 'photoshopSketch',
    appName: 'Photoshop Sketch',
    appCreator: 'Adobe',
    appCreatorLink: 'https://www.adobe.com/nl/products/sketch.html',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/adobe-photoshop-sketch/id839085644?mt=8',
      },
      {
        title: 'Android',
        link: 'https://play.google.com/store/apps/details?id=com.adobe.creativeapps.sketch',
      },
    ],
    images: {
      reframe: PHOTOSHOP_SKETCH_FRAME,
      appIcon: PHOTOSHOP_SKETCH_ICON,
      appScreenshot1: PHOTOSHOP_SKETCH_SCREEN_1,
      appScreenshot2: PHOTOSHOP_SKETCH_SCREEN_2,
      appScreenshot3: PHOTOSHOP_SKETCH_SCREEN_3,
    },
  },
  {
    id: 'assembly',
    appName: 'Assembly',
    appCreator: 'Pixite',
    appCreatorLink: 'http://pixiteapps.com/',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/assembly-art-and-design/id1024210402?mt=8',
      },
    ],
    images: {
      reframe: ASSEMBLY_FRAME,
      appIcon: ASSEMBLY_ICON,
      appScreenshot1: ASSEMBLY_SCREEN_1,
      appScreenshot2: ASSEMBLY_SCREEN_2,
      appScreenshot3: ASSEMBLY_SCREEN_3,
    },
  },
  {
    id: 'mirrorLab',
    appName: 'Mirrorlab',
    appCreator: 'Ilixa',
    appCreatorLink: 'http://ilixa.com/',
    links: [
      {
        title: 'Android',
        link: 'https://play.google.com/store/apps/details?id=com.ilixa.mirror',
      },
    ],
    images: {
      reframe: MIRRORLAB_FRAME,
      appIcon: MIRRORLAB_ICON,
      appScreenshot1: MIRRORLAB_SCREEN_1,
      appScreenshot2: MIRRORLAB_SCREEN_2,
      appScreenshot3: MIRRORLAB_SCREEN_3,
    },
  },
  {
    id: 'portra',
    appName: 'Portra',
    appCreator: 'Playlist Corporation',
    appCreatorLink: 'https://portra.me/',
    links: [
      {
        title: 'iOS',
        link: 'https://itunes.apple.com/us/app/portra-turn-your-selfies-into-artworks/id1251749114?mt=8',
      },
      {
        title: 'Android',
        link: 'https://play.google.com/store/apps/details?id=com.playlist.portra',
      },
    ],
    images: {
      reframe: PORTRA_FRAME,
      appIcon: PORTRA_ICON,
      appScreenshot1: PORTRA_SCREEN_1,
      appScreenshot2: PORTRA_SCREEN_2,
      appScreenshot3: PORTRA_SCREEN_3,
    },
  },
]
