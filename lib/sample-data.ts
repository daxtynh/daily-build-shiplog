import { Project } from './types';

export const sampleProject: Project = {
  id: '1',
  name: 'ShipLog',
  slug: 'shiplog',
  description: 'Beautiful changelogs for indie hackers',
  changelog: [
    {
      id: '1',
      date: '2024-12-05',
      version: '1.0.0',
      title: 'Official Launch',
      description: 'ShipLog is now live! Create beautiful, embeddable changelogs for your product in minutes. No more boring release notes - make your users excited about your updates.',
      type: 'new',
    },
    {
      id: '2',
      date: '2024-12-04',
      version: '0.9.0',
      title: 'Email Notifications',
      description: 'Users can now subscribe to your changelog and get notified when you ship new features. Keep your early adopters in the loop automatically.',
      type: 'new',
    },
    {
      id: '3',
      date: '2024-12-03',
      version: '0.8.0',
      title: 'Embeddable Widget',
      description: 'Added a lightweight embed widget that you can add to your site with just one line of code. Shows a beautiful popup with your latest updates.',
      type: 'improved',
    },
    {
      id: '4',
      date: '2024-12-02',
      version: '0.7.0',
      title: 'Dark Mode Support',
      description: 'Your changelog now respects system dark mode preferences. Looks great on any site.',
      type: 'fixed',
    },
    {
      id: '5',
      date: '2024-12-01',
      version: '0.6.0',
      title: 'API Breaking Change',
      description: 'Changed the API endpoint structure for better consistency. If you were using the API directly, please update your integration.',
      type: 'breaking',
    },
  ],
};
