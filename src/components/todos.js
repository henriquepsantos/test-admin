import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  Filter,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const TodosList = (props) => (
  <List title={"Tarefas"} filters={<TodosFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <TextField source="completed" />
      <EditButton />
    </Datagrid>
  </List>
);
export const TodosEdit = (props) => (
  <Edit title={<TodosTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput disabled source="title" />
      <TextInput source="completed" />
    </SimpleForm>
  </Edit>
);
export const TodosCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="completed" />
    </SimpleForm>
  </Create>
);
const TodosTitle = ({ record }) => {
  return <span>Todos {record ? `"${record.title}"` : ""}</span>;
};
const TodosFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
