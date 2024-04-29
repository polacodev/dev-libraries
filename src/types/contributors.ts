interface Contributors {
  contributorName: string;
  contributorImageURL: string;
}

export interface ContributorsContent {
  id: 'contributors';
  collection: 'contributors';
  data: {
    contributors: Contributors[];
    title: string;
    description: string;
  };
}
