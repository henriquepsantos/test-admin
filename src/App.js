// in src/App.js
import React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { UserList, UserEdit, UserCreate } from "./components/users";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./containers/Dashboard";
import authProvider from "./authProvider";
import { AlbumsList } from "./components/albums";
import { PhotosList, PhotoCreate } from "./components/photos";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PhotoIcon from "@material-ui/icons/Photo";

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
  </Admin>
);

export default App;
