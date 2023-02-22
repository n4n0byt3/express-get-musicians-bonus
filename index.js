const {sequelize} = require('./db');
const {Band} = require('./Band')
const {Musician} = require('./Musician')

Musician.belongsTo(Band, {foreignKey: 'band_id'})
Band.hasMany(Musician, {foreignKey: 'band_id'})

app.get('/bands', async (req, res) => {
    const bands = await Band.findAll({
        include: [Musician]
    });
    res.json(bands);
});

app.get('/bands/:id', async (req, res) => {
    const band = await Band.findByPk(req.params.id, {
        include: [Musician]
    });
    res.json(band);
});


module.exports = {
    Band,
    Musician
};
