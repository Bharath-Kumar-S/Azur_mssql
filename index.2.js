const sql = require('mssql');

(async () => {
    const config = {
        user: 'UserIPSDXCExt',
        password: 'iPg$dX7CE2xt',
        server: 'cp-sql-sha\\shap',
        database: 'DBIPS',
        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    }
    try {
        let pool = await sql.connect(config)
        var a = 926;
        let result1 = await pool.request()
            .query(`INSERT INTO [IPS_Schema].[Monitoring_Script_History_Ext]([ScriptCode],[EnvironmentCode],[TestResultCode],[TestMessage],[HostName],[CreationDate],[CreationTime],[StartTime],[Ext_Property1],[Ext_Property2],[Ext_Property3],[ExternalID])VALUES(${a},3,987,'pass','DXC','05/10/2018','08:15:20.0000000','08:15:20.0000000','abc','abc','abc','0')`)
        console.dir(result1)
        pool.close();
    } catch (err) {
        console.log(err)
    }
})()

sql.on('error', err => {
    // ... error handler
})