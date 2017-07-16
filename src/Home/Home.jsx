import React from 'react';

export default () => (<div>
  <h2>Home</h2>
  {/* @if DEVICE='mobile' */}
  <p>Mobile-specific content</p>
  {/* @endif */}
  {/* @if DEVICE='desktop' */}
  <p>Desktop-specific content</p>
  {/* @endif */}
</div>);
