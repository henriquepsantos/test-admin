// in src/App.js
import React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { UserList, UserEdit, UserCreate } from "./components/users";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./containers/Dashboard";
import authProvider from "./authProvider";
import { TodosList, TodosEdit, TodosCreate } from "./components/todos";
import WorkIcon from "@material-ui/icons/Work";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
    <Resource
      name="todos"
      list={TodosList}
      edit={TodosEdit}
      create={TodosCreate}
      icon={WorkIcon}
    />
  </Admin>
);

export default App;
