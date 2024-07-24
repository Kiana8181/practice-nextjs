import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KK6NPKZ50Z"
      />
      <Script id="kia">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KK6NPKZ50Z');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
