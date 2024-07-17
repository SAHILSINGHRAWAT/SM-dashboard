// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import UserDetails from './components/UserDetails';
import Analytics from './/components/Analytics';
import PostList from './components/PostList';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState('UserDetails'); // Initial state set to 'UserDetails'

  useEffect(() => {
    fetch('http://localhost:8080/api/user')
      .then(response => response.json())
      .then(data => setUser(data));

    fetch('http://localhost:8080/api/analytics')
      .then(response => response.json())
      .then(data => setAnalytics(data));
    
    fetch('http://localhost:8080/api/posts') // Corrected endpoint to fetch posts
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  if (!user || !analytics || !posts) {
    return <div>Loading... Data arriving from backend</div>;
  }

  const redirectTo = () => {
    switch(active){
      case 'UserDetails':
        return <UserDetails user={user} />;
      case 'PostList':
        return <PostList posts={posts} />;
      case 'Analytics':
        return <Analytics analytics={analytics} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
        <button onClick={() => setActive('UserDetails')}>User Details</button>
        <button onClick={() => setActive('PostList')}>Post List</button>
        <button onClick={() => setActive('Analytics')}>Analytics</button>
      </div>
      <div style={{ marginTop: '50px' }}>
        {redirectTo()}
      </div>
    </div>
  );
};

export default Dashboard;
