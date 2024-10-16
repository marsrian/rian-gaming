"use client";
import React from "react";
import ReactCookieBot from "react-cookiebot";

const domainGroupId = process.env.NEXT_PUBLIC_REACT_COOKIE_BOT;

const CookieBotTest = () => {
  return (
    <div>
      <ReactCookieBot domainGroupId={domainGroupId} />
    </div>
  );
};

export default CookieBotTest;
