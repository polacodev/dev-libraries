interface Contributor {
  contributorName: string;
  contributorImageURL: string;
  contributorGithubURL: string;
}

export interface ContributorsContent {
  id: 'contributors';
  collection: 'contributors';
  data: {
    contributors: Contributor[];
    title: string;
    description: string;
  };
}
