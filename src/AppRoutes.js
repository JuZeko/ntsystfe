import { Home } from "./components/Home";
import { Login } from "./components/userManagment/Login";
import { ObjectView } from "./components/object/ObjectView";
import { Register } from "./components/userManagment/Register";
import { UserProfile } from "./components/UserProfile";
import { ViewObjects } from "./components/object/ViewObjects";
import { Categories } from "./components/category/ViewCategories";
import { EditCategory } from "./components/category/EditCategory";
import { EditObject } from "./components/object/EditObject";
import { AddObject } from "./components/object/AddObject";
import { AddCategory } from "./components/category/AddCategory";
import { ViewAgreements } from "./components/agreement/ViewAgreements";
import { SingleAgreement } from "./components/agreement/SingleAgreementView";
import { EditAgreement } from "./components/agreement/EditAgreement";
import { AddAgreement } from "./components/agreement/AddAgreement";


//Add new routes here!
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/viewobjects',
    element: <ViewObjects />
  },
  {
    path: '/profile',
    element: <UserProfile />
  },
  {
    path: '/viewobjects/house',
    element: <ObjectView />
  },
  {
    path: '/admin/category',
    element: <Categories />
  },
  {
    path: '/category/Butas',
    element: <EditCategory />
  },
  {
    path: '/editobject',
    element: <EditObject />
  },
  {
    path: '/addobject',
    element: <AddObject />
  },
  {
    path: '/addcategory',
    element: <AddCategory />
  },
  {
    path: '/agreements',
    element: <ViewAgreements />
  },
  {
    path: '/agreements/singleagreement',
    element: <SingleAgreement />
  },
  {
    path: '/agreements/editagreement',
    element: <EditAgreement />
  },
  {
    path: '/addagreement',
    element: <AddAgreement />
  }


];

export default AppRoutes;
