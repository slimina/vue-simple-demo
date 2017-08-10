import UserList from '../page/UserList.vue'

const routers = [{
    path: '/user',
    component: UserList
},
    {path: '*', redirect: '/user'}
];

export default routers;