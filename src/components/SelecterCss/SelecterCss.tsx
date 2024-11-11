import * as React from 'react';
import './style.scss';

export interface SelecterCssProps {
}

export default function SelecterCss (props: SelecterCssProps) {
  return (
    <div>
      <ul className='father'>
        <li id='boy' className='son1'>1</li>
        <li id='girl' className='son1'>2</li>
        <div rtx-2080="">
          <p>hello</p>
          <div>
          toi day
          </div>
        </div>
        <li className='son1 goodboi'>3</li>
        <li className='son2'>4</li>
        <div>
            <p>test1</p>
        </div>
        <li className='son3'>5</li>
      </ul>
    </div>
  );
}
