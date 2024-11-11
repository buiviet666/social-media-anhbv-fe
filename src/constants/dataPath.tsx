import {
  BellOutlined,
  HomeOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Search from '../components/Search/Search';
import Notify from '../components/Notify/Notify';
import Profile from '../pages/Profile';
import CreatePost from '../components/CreatePost/CreatePost';

export const listItem = [
  { icon: <HomeOutlined />, path: '/', component: '' },
  {
    icon: <SearchOutlined />,
    path: '',
    component: <Search />,
    title: 'Tìm kiếm',
  },
  {
    icon: <BellOutlined />,
    path: '',
    component: <Notify />,
    title: 'Thông báo',
  },
  {
    icon: <PlusOutlined />,
    popup: true,
    component: <CreatePost />,
    title: 'Tạo bài viết mới',
  },
  { icon: <UserOutlined />, path: '/profile', component: <Profile /> },
];
