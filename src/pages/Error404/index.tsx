import * as React from 'react';

export interface Error404Props {}

export default function Error404(props: Error404Props) {
  return (
    <div>
      <h1>Notfound</h1>
      <a href="/">back to home</a>
    </div>
  );
}
