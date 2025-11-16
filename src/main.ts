import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import { 
  personCircleOutline,
  notificationsOutline,
  searchOutline,
  menuOutline,
  arrowUpOutline,
  arrowDownOutline,
  trendingUpOutline,
  expandOutline,
  ellipsisHorizontalOutline,
  calendarClearOutline,
  peopleCircleOutline,
  personOutline,
  checkboxOutline,
  informationCircleOutline
  
} from 'ionicons/icons';

// REGISTER ICONS
addIcons({
  personCircleOutline,
  notificationsOutline,
  searchOutline,
  menuOutline,
  arrowUpOutline,
  arrowDownOutline,
  trendingUpOutline,
  expandOutline,
  ellipsisHorizontalOutline,
  calendarClearOutline,
  peopleCircleOutline,
  personOutline,
  checkboxOutline,
  informationCircleOutline
});


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
