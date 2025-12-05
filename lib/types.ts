export type ChangeType = 'new' | 'improved' | 'fixed' | 'breaking';

export interface ChangelogEntry {
  id: string;
  date: string;
  version: string;
  title: string;
  description: string;
  type: ChangeType;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  changelog: ChangelogEntry[];
}
