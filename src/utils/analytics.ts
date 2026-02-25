// Analytics & Tracking Utilities

// Google Analytics 4 Event Tracking
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Page View Tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Predefined Events for Safari Stays

export const analytics = {
  // Property Events
  propertyViewed: (propertyId: string, propertyName: string, price: number) => {
    trackEvent('view_item', {
      item_id: propertyId,
      item_name: propertyName,
      price: price,
      currency: 'Ksh',
    });
  },

  propertySearched: (query: string, filters: any) => {
    trackEvent('search', {
      search_term: query,
      filters: JSON.stringify(filters),
    });
  },

  // Booking Events
  bookingInitiated: (propertyId: string, propertyName: string, price: number) => {
    trackEvent('begin_checkout', {
      item_id: propertyId,
      item_name: propertyName,
      value: price,
      currency: 'Ksh',
    });
  },

  whatsappClicked: (context: 'property' | 'experience' | 'general', itemId?: string) => {
    trackEvent('whatsapp_click', {
      context,
      item_id: itemId,
    });
  },

  // Experience Events
  experienceViewed: (experienceId: string, title: string, price: number) => {
    trackEvent('view_item', {
      item_id: experienceId,
      item_name: title,
      item_category: 'experience',
      price: price,
      currency: 'Ksh',
    });
  },

  // Content Events
  blogPostViewed: (postId: string, title: string) => {
    trackEvent('view_content', {
      content_type: 'blog_post',
      content_id: postId,
      content_name: title,
    });
  },

  destinationViewed: (destinationId: string, name: string) => {
    trackEvent('view_content', {
      content_type: 'destination',
      content_id: destinationId,
      content_name: name,
    });
  },

  // Engagement Events
  filterApplied: (filterType: string, filterValue: any) => {
    trackEvent('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
    });
  },

  shareClicked: (contentType: string, contentId: string) => {
    trackEvent('share', {
      content_type: contentType,
      content_id: contentId,
    });
  },

  // Conversion Events
  newsletterSignup: (source: string) => {
    trackEvent('newsletter_signup', {
      source,
    });
  },

  contactFormSubmitted: (formType: string) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
    });
  },

  // Navigation Events
  navigationClicked: (linkText: string, destination: string) => {
    trackEvent('navigation_click', {
      link_text: linkText,
      link_destination: destination,
    });
  },

  // Error Tracking
  errorOccurred: (errorType: string, errorMessage: string) => {
    trackEvent('error', {
      error_type: errorType,
      error_message: errorMessage,
    });
  },
};

// Facebook Pixel Tracking
export const fbPixel = {
  pageView: () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  },

  viewContent: (contentId: string, contentType: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_ids: [contentId],
        content_type: contentType,
      });
    }
  },

  initiateCheckout: (value: number, currency: string = 'Ksh') => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value,
        currency,
      });
    }
  },
};

// Hotjar Tracking
export const hotjar = {
  identify: (userId: string, attributes?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('identify', userId, attributes);
    }
  },

  event: (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).hj) {
      (window as any).hj('event', eventName);
    }
  },
};

// Initialize Analytics (call in _app.tsx or layout.tsx)
export const initializeAnalytics = () => {
  // Google Analytics
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }

  // Facebook Pixel
  if (process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    (window as any).fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
    (window as any).fbq('track', 'PageView');
  }

  // Hotjar
  if (process.env.NEXT_PUBLIC_HOTJAR_ID) {
    (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: process.env.NEXT_PUBLIC_HOTJAR_ID, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }
};