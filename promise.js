const sql = require('mssql')
///<reference types="mssql"/>
const config = {
    user: 'UserIPSDXCExt',
    password: 'iPg$dX7CE2xt',
    server: 'cp-sql-sha\\shap',
    database: 'DBIPS',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

sql.connect(config).then(pool => {
    return pool.request()
        // .input('input_parameter', sql.Int, value)
        // .query('select * from mytable where id = @input_parameter')
        .query('select * from IPS_Schema.Monitoring_Script_History_Ext')
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})