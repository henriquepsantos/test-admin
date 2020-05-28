import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const AlbumsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Album" source="title" />
    </Datagrid>
  </List>
);
const AlbumFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="t" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
