import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import { firebaseConfig } from './firebaseConfig';
import { getAnalytics, logEvent } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
const analytics = getAnalytics(app);

logEvent(analytics, 'notification_received');

export { app, perf, analytics };
