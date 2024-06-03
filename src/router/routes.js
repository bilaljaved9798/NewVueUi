import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Profile from "@/pages/Profile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Login from "@/pages/Login.vue";
import EventType from "@/pages/EventType.vue";

const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect to login page by default
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "market/:id",
        name: "market",
        component: EventType,
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },  
      {
        path: "icons",
        name: "icons",
        component: Icons,
      }
    ],
  },
  
  { path: "*", component: NotFound },
];

export default routes;
