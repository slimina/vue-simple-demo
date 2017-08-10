import Topics  from '../page/Topics.vue'

const routers = [{
    path: '/topics',
    component: Topics
},
    {path: '*', redirect: '/topics'}
];

export default routers;