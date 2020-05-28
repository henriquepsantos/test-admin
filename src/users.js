// in src/users.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  Filter,
} from "react-admin";

export const UserList = (props) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField label="Street" source="address.street" />
      <TextField label="Suite" source="address.suite" />
      <TextField label="City" source="address.city" />
      <EditButton />
    </Datagrid>
  </List>
);
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput label="Street" source="address.street" />
      <TextInput label="Suite" source="address.suite" />
      <TextInput label="City" source="address.city" />
    </SimpleForm>
  </Edit>
);
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput labes="Street" source="address.street" />
      <TextInput label="Suite" source="address.suite" />
      <TextInput label="City" source="adress.city" />
    </SimpleForm>
  </Create>
);
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);
