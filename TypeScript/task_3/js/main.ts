/* eslint-disable @typescript-eslint/no-unused-vars */
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud'


const rowObject: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID: RowID = CRUD.insertRow(rowObject);

const updateRow: RowElement = {
    ...rowObject,
    age: 23
}

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID)
