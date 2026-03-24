import { writeFileSync, readFileSync, existsSync } from "fs";
const FILE = "/tmp/dump.json";
export default function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  if(req.method!=="POST") return res.status(405).end();
  const list = existsSync(FILE)? JSON.parse(readFileSync(FILE)) : [];
  list.push(req.body);
  writeFileSync(FILE, JSON.stringify(list));
  res.status(200).json({ok:true});
}
