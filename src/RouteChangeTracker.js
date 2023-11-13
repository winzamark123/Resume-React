import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnalytics, logEvent } from 'firebase/analytics';

const RouteChangeTracker = () => {
    const location = useLocation();
    const analytics = getAnalytics();

    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_path: location.pathname,
        });
    }, [location]);

    return null;
};

export default RouteChangeTracker;
