interface Library {
  libraryTitle: string;
  libraryDescription: string;
  libraryIcon: string;
  libraryURL: string;
}

export interface LibrariesContent {
  id: 'libraries';
  collection: 'libraries';
  data: {
    libraries: Library[];
    title: string;
    description: string;
  };
}
