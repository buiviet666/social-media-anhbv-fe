import styled from 'styled-components';
import CartPost from '../../components/CartPost/CartPost';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider, List, Skeleton } from 'antd';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import SideBarRight from '../../components/SideBarRight/SideBarRight';
import FilterPost from '../../components/FilterPost/FilterPost';
import imgtest from '../assets/c107be7a8740.png';

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const [data, setData] = useState([
    {
      name: '1',
      img: ['d11', 'd22', 'd33'],
    },
    { name: '2', text: 'text2' },
    { name: '3', text: 'text3', linkimg: imgtest },
    { name: '4', text: 'text4' },
    { name: '5', text: 'text5' },
    { name: '6', text: 'text6' },
    { name: '1', text: 'text1' },
    { name: '2', text: 'text2' },
    { name: '3', text: 'text3' },
    { name: '4', text: 'text4' },
    { name: '5', text: 'text5' },
    { name: '6', text: 'text6' },
    { name: '1', text: 'text1' },
    { name: '2', text: 'text2' },
    { name: '3', text: 'text3' },
    { name: '4', text: 'text4' },
    { name: '5', text: 'text5' },
    { name: '6', text: 'text6' },
    { name: '1', text: 'text1' },
    { name: '2', text: 'text2' },
    { name: '3', text: 'text3' },
    { name: '4', text: 'text4' },
    { name: '5', text: 'text5' },
    { name: '6', text: 'text6' },
    { name: '1', text: 'text1' },
    { name: '2', text: 'text2' },
    { name: '3', text: 'text3' },
    { name: '4', text: 'text4' },
    { name: '5', text: 'text5' },
    { name: '6', text: 'text6' },
  ]);

  // const data = [
  //   {name: '1', img: 'img1'},
  //   {name: '2', img: 'img2'},
  //   {name: '3', img: 'img3'},
  //   {name: '4', img: 'img4'},
  //   {name: '5', img: 'img5'},
  //   {name: '6', img: 'img6'},
  // ];

  const loadMoreData = () => {
    const newItems = Array.from({ length: 15 }, (_, index) => ({
      name: `${data.length + index + 1}`,
      img: `img${data.length + index + 1}`,
    }));
    setData((prevData: any) => [...prevData, ...newItems]);
  };

  return (
    <StyleHome>
      <div className="home_content-container">
        <FilterPost />
        <div id="scrollableDiv" className="cartPost_main">
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Footer />}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item, idx) => <CartPost data={item} key={idx} />}
            />
          </InfiniteScroll>
        </div>
      </div>
      <SideBarRight />
    </StyleHome>
  );
}

const StyleHome = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  .home_content-container {
    max-width: 630px;
    width: 100%;
    height: 100vh;
  }

  .cartPost_main {
    /* height: 90%; */
    height: 90vh;
    overflow: auto;
    /* padding: 0px 16px; */
    max-width: 100%;
    /* width: min(470px, 100vw); */
    width: 470px;
  }

  .forrell {
    height: 10%;
  }

  .ant-list {
    overflow: hidden;
  }
`;
