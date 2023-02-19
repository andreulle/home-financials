import axios from "axios";
import {v4 as uuidv4} from 'uuid';

const API_KEY = process.env.REACT_APP_API_KEY;
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const months = [0,1,2,3,4,5];
const monthDesc = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
const planilhas = ['MASTER SUB (6)!A1:X63', 'VISA ROSA (6)!A1:X63', 'INFINITY PRETO (11)!A1:X63', 'NU ROXINHO (16)!A1:X63'];
//const planilhas = ['NU ROXINHO (16)!A1:X63'];

export const fetchData = async (sheet) => {
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheet}?key=${API_KEY}`
  );
  return response.data;
};

export const listMajor = async (categorySum, sheet) =>{
  let range = await fetchData(sheet)
  
  months.forEach(element => {
    let index = element * 4;
      range.values.forEach(row => {
          let categoryKey = String(row[index + 1]).toUpperCase();
          let pastValue = !isNaN(categorySum.get(element).get(categoryKey) + 0) ? categorySum.get(element).get(categoryKey) : 0; 

          categorySum.get(element).set(categoryKey, pastValue + parseFloat(String(row[index + 2]).replace(",",".")));
      });
  });
}

export const fetchCategorizedList = async () => {
  const categorizedList = [];
  let categorySum = new Map();

  months.forEach(element => {
    categorySum.set(element, new Map())
  });  

  for (const key in planilhas) {
    await listMajor(categorySum, planilhas[key]);
  }
  
  for (let [key, CategorybyMonth] of categorySum) {
    categorizedList.push([]);
    categorizedList[categorizedList.length - 1].push({
      key: uuidv4(),
      style: "header",
      description: monthDesc[key],
      preciseAmount: 0
    });

    for (let [categoryDesc, value] of CategorybyMonth) {
      if(!isNaN(value) && categoryDesc != null && categoryDesc != ""){
        categorizedList[categorizedList.length - 1].push({
          key: uuidv4(),
          style: "categoryItem",
          description: categoryDesc,
          preciseAmount: value.toFixed(2)
        });
      }
    }
    categorizedList[categorizedList.length - 1].sort(function(a, b){return b.preciseAmount == 0 ? 0 : b.preciseAmount - a.preciseAmount});
  }

  return categorizedList;
}

