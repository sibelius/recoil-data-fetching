import { selector, atom } from 'recoil';

export type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export const username = atom({
  key: 'username',
  default: null,
});

export const githubUser = selector({
  key: 'githubUser',
  get: async ({get}) => {
    const ghUsername = get(username);

    if (!ghUsername) {
      return null;
    }

    const response = await fetch(`https://api.github.com/users/${ghUsername}`);
    const user: User = await response.json();

    return user;
  },
});