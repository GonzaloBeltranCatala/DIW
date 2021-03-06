const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({

    alumne: String,
    grupo: String,
    profesor: String,
    horario: String,
    data: String,
    hora: String,
    lloc: String,
    check: String,
    opcionA: Boolean,
    opcionB: Boolean,
    opcionC: Boolean,
    opcionD: Boolean,
    opcionE: Boolean,
    opcionF: Boolean,
    dias: String,
    tareas: String,
    diastarea: String,
    horatarea: String,
    iniciodias: String,
    findias: String,
    diassuspenso: String,
    iniciodiassuspenso: String,
    findiassuspenso: String,
    leveA: Boolean,
    leveB: Boolean,
    leveC: Boolean,
    leveD: Boolean,
    leveE: Boolean,
    leveF: Boolean,
    leveG: Boolean,
    leveH: Boolean,
    leveI: Boolean,
    leveJ: Boolean,
    leveK: Boolean,
    leveL: Boolean,
    leveM: Boolean,
    leveN: Boolean,
    leveO: Boolean,
    leveP: Boolean,
    leveQ: Boolean,
    leveR: Boolean,
    leveS: Boolean,
    graveA: Boolean,
    graveB: Boolean,
    graveC: Boolean,
    graveD: Boolean,
    graveE: Boolean,
    graveF: Boolean,
    graveG: Boolean,
    graveH: Boolean,
    graveI: Boolean,
    graveJ: Boolean,
    graveK: Boolean,
    graveL: Boolean,
    graveM: Boolean,
    graveN: Boolean,
    graveO: Boolean,
    graveP: Boolean,
    telefono: String,
    correo: String,
    alumno: String,
    padre: String,
    diafirma: String,
    mesfirma: String,
    yearfirma: String,
    firmadirector: String,
    texto: String
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);