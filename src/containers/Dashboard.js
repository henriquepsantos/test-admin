// in src/Dashboard.js
import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default () => (
  <Card>
    <CardHeader title="Seja bem-vindo!" />
    <CardContent>
      Nessa aplicação você pode gerenciar dados de funcionários da empresa.
    </CardContent>
  </Card>
);
