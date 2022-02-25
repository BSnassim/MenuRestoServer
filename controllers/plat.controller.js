const Plat = require('../models/plat.model');

exports.plat_create = function (req, res) {
    let plat = new Plat(
        {
            
            _titre: req.body._titre,
            _prix: req.body._prix,
            _image:req.body._image,
            _categorie: req.body._categorie,
        }
    );

    
    plat.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Plat Created successfully');
        
    })
};

exports.getplats = function (req, res) {
    Plat.find({},function (err, plat) {
        if (err) return (err);
        res.send(plat);
    })
};

exports.plat_details = function (req, res) {
    Plat.findById(req.params.id, function (err, plat) {
        if (err) return (err);
        res.send(plat);
    })
};

exports.plat_update = function (req, res) {
    Plat.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, plat) {
        if (err) return next(err);
        res.send('Plat udpated.');
    });
};

exports.plat_delete = function (req, res) {
    Plat.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
