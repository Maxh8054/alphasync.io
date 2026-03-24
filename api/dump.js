import { readFileSync, existsSync } from "fs";
const FILE = "/tmp/dump.json";
export default function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  const data = existsSync(FILE)? readFileSync(FILE) : "[]";
  res.status(200).json(JSON.parse(data));
}
