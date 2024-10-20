"use client"
import React, {Component} from 'react';
import { DiscussionEmbed } from "disqus-react";

const CommentsPractice = ({ blog }) => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""
  const disqusShortname = process.env.NEXT_PUBLIC_DISCUSSHORTNAME;
  const disqusConfig = {
    url: pageUrl,
    identifier: blog._id,
    title: blog.title,
  };

  return (
    <div className="mt-8 bg-white p-4 rounded-md">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
};

export default CommentsPractice;
