export interface SocialNetwork {
  mediaName: string;
  link: string;
  svgIcon: string;
}

export interface AboutUser {
  icon: string;
  name: string;
  role: string;
  socialNetworks: SocialNetwork[];
}
