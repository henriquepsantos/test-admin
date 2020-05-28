import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
} from "react-admin";

export const AlbumsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);
