!function(){let e,t;metadata={systemName:"twilio.javascriptbroker.k2nexus",displayName:"Twilio Javascript Broker",description:"A JSSP based Twilio connector for K2 Nexus.",configuration:{"Account ID":{displayName:"Account Id",type:"string",required:!0},"Default From":{displayName:"Default 'From' Phone Number",type:"string"}}},ondescribe=async function({configuration:e}){postSchema({objects:{SMS:{displayName:"SMS",description:"Interact with Twilio's Programmable SMS API.",properties:{to:{displayName:"To",type:"string"},from:{displayName:"From",type:"string"},body:{displayName:"Body",type:"string"},mediaUrl:{displayName:"Media URL",type:"string"},status:{displayName:"Status",type:"string"}},methods:{sendSMS:{displayName:"Send SMS",type:"execute",inputs:["to","from","body","mediaUrl"],requiredInputs:["to","body"],outputs:["status"]}}}}})},onexecute=async function({objectName:o,methodName:s,parameters:a,properties:r,configuration:n,schema:i}){switch(e=n["Account ID"],t=n["Default From"],o){case"SMS":await async function(o,s){switch(o){case"sendSMS":await async function(o){return new Promise((s,a)=>{let r=function(e){if(!e.from&&!t)throw new Error("Missing 'From' contact number. Specify as a SmartObject property or Service Intance key.");return e.from?e.from:t}(o);var n={To:o.to,From:r,Body:o.body};!function(e,t,o,s){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState){if(201!=a.status&&200!=a.status){if(400==a.status||404==a.status){e=JSON.parse(a.responseText);throw new Error(e.code+": "+e.message+". Data: "+t)}postResult({});e=JSON.parse(a.responseText);throw new Error(e.code+": "+e.message+". Data: "+t)}var e=JSON.parse(a.responseText);"function"==typeof s&&s(e)}};var r=function(e){const t=[];for(let o in e){let s=e[o];t.push(encodeURIComponent(o)+"="+encodeURIComponent(s))}return t.join("&")}(t);a.open(o.toUpperCase(),e),a.withCredentials=!0,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(r)}("https://api.twilio.com/2010-04-01/Accounts/"+e+"/Messages.json",n,"POST",(function(e){postResult({status:e.status}),s()}))})}(s)}}(s,r);break;default:throw new Error("The object "+o+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
