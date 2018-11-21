
const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el incidencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"incidencia Vacio..." 
        });
    }

    const incidencia = new Incidencia({
        alumne: req.body.alumne,
        grupo: req.body.grupo,
        profesor: req.body.profesor,
        horario: req.body.horario,
        data: req.body.data,
        hora: req.body.hora,
        lloc: req.body.lloc,
        opcionA: req.body.opcionA,
        opcionB: req.body.opcionB,
        opcionC: req.body.opcionC,
        opcionD: req.body.opcionD,
        opcionE: req.body.opcionE,
        opcionF: req.body.opcionF,
        dias: req.body.dias,
        tareas: req.body.tareas,
        diastarea: req.body.diastarea,
        horatarea: req.body.horatarea,
        iniciodias: req.body.iniciodias,
        findias: req.body.findias,
        diassuspenso: req.body.diassuspenso,
        iniciodiassuspenso: req.body.iniciodiassuspenso,
        findiassuspenso: req.body.findiassuspenso,
        leveA: req.body.leveA,
        leveB: req.body.leveB,
        leveC: req.body.leveC,
        leveD: req.body.leveD,
        leveE: req.body.leveE,
        leveF: req.body.leveF,
        leveG: req.body.leveG,
        leveH: req.body.leveH,
        leveI: req.body.leveI,
        leveJ: req.body.leveJ,
        leveK: req.body.leveK,
        leveL: req.body.leveL,
        leveM: req.body.leveM,
        leveN: req.body.leveN,
        leveO: req.body.leveO,
        leveP: req.body.leveP,
        leveQ: req.body.leveQ,
        leveR: req.body.leveR,
        leveS: req.body.leveS,
        graveA: req.body.graveA,
        graveB: req.body.graveB,
        graveC: req.body.graveC,
        graveD: req.body.graveD,
        graveE: req.body.graveE,
        graveF: req.body.graveF,
        graveG: req.body.graveG,
        graveH: req.body.graveH,
        graveI: req.body.graveI,
        graveJ: req.body.graveJ,
        graveK: req.body.graveK,
        graveL: req.body.graveL,
        graveM: req.body.graveM,
        graveN: req.body.graveN,
        graveO: req.body.graveO,
        graveP: req.body.graveP,
        telefono: req.body.telefono,
        correo: req.body.correo,
        alumno: req.body.alumno,
        padre: req.body.padre,
        diafirma: req.body.diafirma,
        mesfirma: req.body.mesfirma,
        yearfirma: req.body.yearfirma,
        firmadirector: req.body.firmadirector
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating incidencia"
        });
    });
};



// Obtener todos los incidencia
exports.findAll = (req,res) => {

        Incidencia.find().then(incidencia=>{
            res.send(incidencia);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un incidencia por Id
exports.findOne = (req,res) => {
    Incidencia.findById(req.params.incidenciaId)
    .then(incidencia=>{
        if (!incidencia){
            return res.status(404).send({
                message: "incidencia NOT FOUND con ID " +req.params.incidenciaId
            });
            }
            res.send(incidencia);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "incidencia no encontrado con ese id :" +req.params.incidenciaId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaId
             });
        });
    };




// Actualizar un incidencia
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "incidencia vacio"
        });
    }

    // Find note and update it with the request body
    Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
        alumne: req.body.alumne,
        grupo: req.body.grupo,
        profesor: req.body.profesor,
        horario: req.body.horario,
        data: req.body.data,
        hora: req.body.hora,
        lloc: req.body.lloc,
        opcionA: req.body.opcionA,
        opcionB: req.body.opcionB,
        opcionC: req.body.opcionC,
        opcionD: req.body.opcionD,
        opcionE: req.body.opcionE,
        opcionF: req.body.opcionF,
        dias: req.body.dias,
        tareas: req.body.tareas,
        diastarea: req.body.diastarea,
        horatarea: req.body.horatarea,
        iniciodias: req.body.iniciodias,
        findias: req.body.findias,
        diassuspenso: req.body.diassuspenso,
        iniciodiassuspenso: req.body.iniciodiassuspenso,
        findiassuspenso: req.body.findiassuspenso,
        leveA: req.body.leveA,
        leveB: req.body.leveB,
        leveC: req.body.leveC,
        leveD: req.body.leveD,
        leveE: req.body.leveE,
        leveF: req.body.leveF,
        leveG: req.body.leveG,
        leveH: req.body.leveH,
        leveI: req.body.leveI,
        leveJ: req.body.leveJ,
        leveK: req.body.leveK,
        leveL: req.body.leveL,
        leveM: req.body.leveM,
        leveN: req.body.leveN,
        leveO: req.body.leveO,
        leveP: req.body.leveP,
        leveQ: req.body.leveQ,
        leveR: req.body.leveR,
        leveS: req.body.leveS,
        graveA: req.body.graveA,
        graveB: req.body.graveB,
        graveC: req.body.graveC,
        graveD: req.body.graveD,
        graveE: req.body.graveE,
        graveF: req.body.graveF,
        graveG: req.body.graveG,
        graveH: req.body.graveH,
        graveI: req.body.graveI,
        graveJ: req.body.graveJ,
        graveK: req.body.graveK,
        graveL: req.body.graveL,
        graveM: req.body.graveM,
        graveN: req.body.graveN,
        graveO: req.body.graveO,
        graveP: req.body.graveP,
        telefono: req.body.telefono,
        correo: req.body.correo,
        alumno: req.body.alumno,
        padre: req.body.padre,
        diafirma: req.body.diafirma,
        mesfirma: req.body.mesfirma,
        yearfirma: req.body.yearfirma,
        firmadirector: req.body.firmadirector

    }, {new: true})
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });
        }
        res.send(incidencia);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "Error updating incidencia with id " + req.params.incidenciaId
        });
    });
};

// Borrar un incidencia 
exports.delete = (req,res)=>{
    Incidencia.findByIdAndRemove(req.params.incidenciaId)
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "incidencia no encontrado " + req.params.incidenciaId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese incidencia with id " + req.params.incidenciaId
        });
    });
};