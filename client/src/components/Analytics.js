// src/components/Analytics.js
import React from 'react';

const Analytics = ({ analytics }) => {
  return (
    <div>
      <h3>Analytics</h3>
      <p>Followers: {analytics.followers}</p>
      <p>Following: {analytics.following}</p>
      <p>Posts: {analytics.posts}</p>
      <p>Accounts Reached: {analytics.accountsReached}</p>
      <p>Accounts Engaged: {analytics.accountsEngaged}</p>
      <p>Ads Insights: {analytics.adsInsights}</p>
      <p>Active Promotions: {analytics.activePromotions}</p>
      <p>Total Stories: {analytics.totalStories}</p>
      <p>Total Follows: {analytics.totalFollows}</p>
      <p>Total Saves: {analytics.totalSaves}</p>
      <p>Total Comments: {analytics.totalComments}</p>
      <p>Total Shares: {analytics.totalShares}</p>
    </div>
  );
};

export default Analytics;
