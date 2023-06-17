const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registro', (err, registro) => {
            if(err){
                res.json(err);
            }
            res.render('registro', {
                data: registro
            })
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('INSERT INTO registro set ?', [data], (err, registro) => {
            console.log(registro);
            res.send('works')
        })
    })
}


module.exports = controller;