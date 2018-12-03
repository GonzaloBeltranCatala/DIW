
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

    if(req.body.leveA == 'marcado'){
        req.body.leveA = true;
    }
   
    if(req.body.leveB == 'marcado'){
        req.body.leveB = true;
    }

    if(req.body.leveC == 'marcado'){
        req.body.leveC = true;
    }

    if(req.body.leveD == 'marcado'){
        req.body.leveD = true;
    }

    if(req.body.leveE == 'marcado'){
        req.body.leveE = true;
    }
  
    if(req.body.leveF == 'marcado'){
        req.body.leveF = true;
    }
    
    if(req.body.leveG == 'marcado'){
        req.body.leveG = true;
    }
    
    if(req.body.leveH == 'marcado'){
        req.body.leveH = true;
    }
   
    if(req.body.leveI == 'marcado'){
        req.body.leveI = true;
    }
    
    if(req.body.leveJ == 'marcado'){
        req.body.leveJ = true;
    }
    
    if(req.body.leveK == 'marcado'){
        req.body.leveK = true;
    }


    if(req.body.leveL == 'marcado'){
        req.body.leveL = true;
    }
 

    if(req.body.leveM == 'marcado'){
        req.body.leveM = true;
    }


    if(req.body.leveN == 'marcado'){
        req.body.leveN = true;
    }
  
    if(req.body.leveO == 'marcado'){
        req.body.leveO = true;
    }


    if(req.body.leveP == 'marcado'){
        req.body.leveP = true;
    }

    if(req.body.leveQ == 'marcado'){
        req.body.leveQ = true;
    }
 

    if(req.body.leveR == 'marcado'){
        req.body.leveR = true;
    }


    if(req.body.leveS == 'marcado'){
        req.body.leveS = true;
    }


//graves
    if(req.body.graveA == 'marcado'){
        req.body.graveA = true;
    }


    if(req.body.graveB == 'marcado'){
        req.body.graveB = true;
    }
 

    if(req.body.graveC == 'marcado'){
        req.body.graveC = true;
    }


    if(req.body.graveD == 'marcado'){
        req.body.graveD = true;
    }


    if(req.body.graveE == 'marcado'){
        req.body.graveE = true;
    }


    if(req.body.graveF == 'marcado'){
        req.body.graveF = true;
    }
 

    if(req.body.graveG == 'marcado'){
        req.body.graveG = true;
    }


    if(req.body.graveH == 'marcado'){
        req.body.graveH = true;
    }


    if(req.body.graveI == 'marcado'){
        req.body.graveI = true;
    }


    if(req.body.graveJ == 'marcado'){
        req.body.graveJ = true;
    }


    if(req.body.graveK == 'marcado'){
        req.body.graveK = true;
    }
 

    if(req.body.graveL == 'marcado'){
        req.body.graveL = true;
    }


    if(req.body.graveM == 'marcado'){
        req.body.graveM = true;
    }


    if(req.body.graveN == 'marcado'){
        req.body.graveN = true;
    }


    if(req.body.graveO == 'marcado'){
        req.body.graveO = true;
    }


    if(req.body.graveP == 'marcado'){
        req.body.graveP = true;
    }

    if(req.body.opcionA == 'marcado'){
        req.body.opcionA = true;
    }
    if(req.body.opcionB == 'marcado'){
        req.body.opcionB = true;
    }
    if(req.body.opcionC == 'marcado'){
        req.body.opcionC = true;
    }
    if(req.body.opcionD == 'marcado'){
        req.body.opcionD = true;
    }

    if(req.body.opcionE == 'marcado'){
        req.body.opcionE = true;
    }

    if(req.body.opcionF == 'marcado'){
        req.body.opcionF = true;
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
        firmadirector: req.body.firmadirector,
        texto: req.body.texto
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
        firmadirector: req.body.firmadirector,
        texto: req.body.texto

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