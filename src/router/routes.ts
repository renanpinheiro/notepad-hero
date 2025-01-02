import DefaultLayout from '../layouts/DefaultLayout.vue';
import LoginLayout from '../layouts/LoginLayout.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import NoteView from '../views/NoteView.vue';
import ProfileView from '../views/ProfileView.vue';
import CategoryView from '../views/CategoryView.vue';
import RegisterView from '../views/RegisterView.vue';
import DebugView from '../views/DebugView.vue';

export const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'note/:id',
        name: 'note',
        component: NoteView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: 'profile',
        name: 'profile',
        component: ProfileView,
      },
      {
        path: 'categories',
        name: 'categories',
        component: CategoryView,
      },
    ],
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: LoginView,
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView,
      },
    ],
  },
  {
    path: '/debug',
    name: 'debug',
    component: DebugView,
  },
];
