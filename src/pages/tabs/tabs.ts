import { Component } from '@angular/core';

import { ActivityManagementPage } from '../activity-management/activity-management';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { ProgressionPage } from '../progression/progression';
import { SessionsPage } from '../sessions/sessions';
import { TimelinePage } from '../timeline/timeline';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelinePage;
  tab2Root = SessionsPage;
  tab3Root = LeaderboardPage;
  tab4Root = ProgressionPage;

  constructor() {

  }
}
