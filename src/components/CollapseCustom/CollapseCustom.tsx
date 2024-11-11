import React, { useState } from 'react';
import './style.scss';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export interface CollapseCustomProps {}

export default function CollapseCustom (props: CollapseCustomProps) {
  const [collapse, setCollapse] = useState<number | null>(null);

  const fakeData = [
    {
      id: 0,
      title: 'Ingredients',
      description: '100% Cotton | Canadian Beeswax | Jojoba Oil | Tree Rosin',
    },
    {
      id: 1,
      title: 'hai',
      description: 'nameeeeee',
    },
    {
      id: 2,
      title: 'ba',
      description: 'nameeeeee',
    },
    {
      id: 3,
      title: 'bon',
      description: 'nameeeeee',
    }
  ];

  const clickHandleTabMobide = (idx: number) => {
    setCollapse(prevIndex => (prevIndex === idx ? null : idx));
  };

  return (
    <div className='collapseCustom-main'>
      <ul className='collapseCustom-container'>
        {fakeData.map((item, idx) => (
          <div
            className={`accordion ${collapse === idx ? 'active' : ''}`}
            key={item.id}
            onClick={() => clickHandleTabMobide(idx)}
          >
            <div className='accordion__title'>
              <span className='accordion__title-main'>{item.title}</span>
              <span className="accordion__title-icon">
                {collapse === idx ? <MinusOutlined /> : <PlusOutlined />}
              </span>
            </div>
            <div
              className="accordion__content"
              style={{ maxHeight: collapse === idx ? '500px' : '0px' }}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
