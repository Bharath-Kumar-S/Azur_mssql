const sql = require('mssql');

(async () => {
    const config = {
        user: 'UserIPSDXCExt',
        password: 'iPg$dX7CE2xt',
        server: 'cp-sql-sha\\shap',
        database: 'DBIPS',
        options: {
            encrypt: true 
        }
    }

    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .query('select * from IPS_Schema.Monitoring_Script_History_Ext')
        console.dir(result1)
        pool.close();




    } catch (err) {
        console.log(err)
    }
})()

sql.on('error', err => {
    // ... error handler
})