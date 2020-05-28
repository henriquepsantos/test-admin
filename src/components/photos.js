// in src/users.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
} from "react-admin";
import MyUrlField from "./MyUrlField";

export const PhotosList = (props) => (
  <List filters={<PhotoFilter />} {...props}>
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
const PhotoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="t" alwaysOn />
    <ReferenceInput
      label="Album"
      source="albumId"
      reference="albums"
      allowEmpty
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);
