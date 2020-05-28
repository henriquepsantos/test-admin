// in src/users.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Create,
} from "react-admin";
import MyUrlField from "./MyUrlField";

export const PhotosList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField label="Album" source="albumId" reference="albums">
        <TextField source="title" />
      </ReferenceField>
      <TextField label="Photo Title" source="title" />
      <MyUrlField source="url" />
    </Datagrid>
  </List>
);

export const PhotoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Album" source="albumId" reference="albums">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput label="Photo Title" source="title" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
