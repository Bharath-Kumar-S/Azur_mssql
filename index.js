const sql = require('mssql')

sql.connect('mssql://UserIPSDXCExt:iPg$dX7CE2xt@cp-sql-sha\\shap/DBIPS')
    .then(() => {
        return sql.query`select * from IPS_Schema.Monitoring_Script_History_Ext`
    }).then(result => {
        console.dir(result);
    }).catch(err => {
        console.log("err" + err)
    })
sql.on('error', err => {

})