import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../../../models/pestanias/empresa';
import { EmpresaService } from '../../../service/pestanias/empresa/empresa.service';

interface Parroquia {
  id: number;
  parroquia: string;
}
interface Canton {
  id: number;
  canton: string;
  parroquias: Parroquia[];
}

interface Provincia {
  id: number;
  provincia: string;
  cantones: Canton[];
}
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  provincias = [];
  cantonesMa: Canton[] = [];
  parroquiasMa: Parroquia[] = [];
  cantonesSu: Canton[] = [];
  parroquiasSu: Parroquia[] = [];

  provinciasMapping: Provincia[] = [
    {
      id: 1,
      provincia: 'AZUAY',
      cantones: [
        {
          id: 101,
          canton: 'CUENCA',
          parroquias: [
            {
              id: 10101,
              parroquia: 'BELLAVISTA',
            },
            {
              id: 10102,
              parroquia: 'CAÑARIBAMBA',
            },
          ],
        },
      ],
    },
    {
      id: 9,
      provincia: 'GUAYAS',
      cantones: [
        {
          id: 901,
          canton: 'GUAYAQUIL',
          parroquias: [
            {
              id: 90101,
              parroquia: 'AYACUCHO',
            },
            {
              id: 90102,
              parroquia: 'BOLÍVAR (SAGRARIO)',
            },
          ],
        },
      ],
    },
    {
      id: 17,
      provincia: 'PICHINCHA',
      cantones: [
        {
          id: 1701,
          canton: 'QUITO',
          parroquias: [
            {
              id: 17010,
              parroquia: 'BELISARIO QUEVEDO',
            },
            {
              id: 170102,
              parroquia: 'CARCELÉN',
            },
          ],
        },
      ],
    },
  ];

  getCantones(provId: number) {
    return this.provinciasMapping
      .filter((prov) => prov.id == provId)
      .map((prov) => prov.cantones)
      .flat();
  }

  getParroquias(cantonId: number) {
    return this.provinciasMapping
      .map((prov) => prov.cantones.filter((canton) => cantonId == canton.id))
      .flat()
      .map((prov) => prov.parroquias)
      .flat();
  }

  currentEntity: Empresa = {
    empresaId: 0,
    nombreE: '',
    entidadId: 1,
    personaAc: '',
    numRuc: '',
    actividadEc: '',
    correoE: '',
    telfCo: '',
    parroquiaMa: 1,
    provinciaMa: 1,
    cantonMa: 1,
    direccionMa: '',
    parroquiaSu: 1,
    provinciaSu: 1,
    cantonSu: 1,
    direccionSu: '',
    numEE: '',
    totalEE: '',
    lugarU: '',
    beneficiariosDi: '',
    beneficiariosIndi: '',
  };

  empresaForm = this.fb.group({
    nombreE: [this.currentEntity.nombreE, [Validators.required]],
    personaAc: [this.currentEntity.personaAc, [Validators.required]],
    naturaleza: this.fb.group({
      naturalezaType: ['publica', [Validators.required]],
    }),
    numRuc: [this.currentEntity.numRuc, [Validators.required]],
    actividadEc: [this.currentEntity.actividadEc, [Validators.required]],
    correoE: [this.currentEntity.correoE, [Validators.required]],
    telfCo: [this.currentEntity.telfCo, [Validators.required]],
    parroquiaMa: [this.currentEntity.parroquiaMa, [Validators.required]],
    provinciaMa: [this.currentEntity.provinciaMa, [Validators.required]],
    cantonMa: [this.currentEntity.cantonMa, [Validators.required]],
    direccionMa: [this.currentEntity.direccionMa, [Validators.required]],
    parroquiaSu: [this.currentEntity.parroquiaSu, [Validators.required]],
    provinciaSu: [this.currentEntity.provinciaSu, [Validators.required]],
    cantonSu: [this.currentEntity.cantonSu, [Validators.required]],
    direccionSu: [this.currentEntity.direccionSu, [Validators.required]],
    numEE: [this.currentEntity.numEE, [Validators.required]],
    totalEE: [this.currentEntity.totalEE, [Validators.required]],
    lugarU: [this.currentEntity.lugarU, [Validators.required]],
    beneficiariosDi: [this.currentEntity.beneficiariosDi, [Validators.required]],
    beneficiariosIndi: [this.currentEntity.beneficiariosIndi, [Validators.required]],
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  onChangeCantonMatriz(cantonId: any) {
    if (cantonId) {
      this.parroquiasMa = this.getParroquias(cantonId.value);
    } else {
      this.parroquiasMa = [];
    }
    this.parroquiaMa?.setValue(0);
  }

  onChangeProvinciaMatriz(provId: any) {
    if (provId) {
      this.cantonesMa = this.getCantones(provId.value);
      this.parroquiasMa = [];
    } else {
      this.cantonesMa = [];
      this.parroquiasMa = [];
    }
    this.cantonMa?.setValue(0);
    this.parroquiaMa?.setValue(0);
  }

  onChangeCantonSucursal(cantonId: any) {
    if (cantonId) {
      this.parroquiasSu = this.getParroquias(cantonId.value);
    } else {
      this.parroquiasSu = [];
    }
    this.parroquiaSu?.setValue(0);
  }

  onChangeProvinciaSucursal(provId: any) {
    if (provId) {
      this.cantonesSu = this.getCantones(provId.value);
      this.parroquiasSu = [];
    } else {
      this.cantonesSu = [];
      this.parroquiasSu = [];
    }
    this.cantonSu?.setValue(0);
    this.parroquiaSu?.setValue(0);
  }

  onSubmit() {
    console.warn(this.empresaForm.value);
    console.table(this.currentEntity);
    this.empresaService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        empresaId: 0,
        nombreE: '',
        entidadId: 1,
        personaAc: '',
        numRuc: '',
        actividadEc: '',
        correoE: '',
        telfCo: '',
        parroquiaMa: 1,
        provinciaMa: 1,
        cantonMa: 1,
        direccionMa: '',
        parroquiaSu: 1,
        provinciaSu: 1,
        cantonSu: 1,
        direccionSu: '',
        numEE: '',
        totalEE: '',
        lugarU: '',
        beneficiariosDi: '',
        beneficiariosIndi: '',
      };
    });
  }

  findById(id: number): void {
    this.empresaService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }
  get nombreE() {
    return this.empresaForm.get('nombreE');
  }
  get personaAc() {
    return this.empresaForm.get('personaAc');
  }
  get naturaleza() {
    return this.empresaForm.get('naturaleza');
  }
  get naturalezaType() {
    return this.naturaleza?.get('naturalezaType');
  }
  get numRuc() {
    return this.empresaForm.get('numRuc');
  }
  get actividadEc() {
    return this.empresaForm.get('actividadEc');
  }
  get correoE() {
    return this.empresaForm.get('correoE');
  }
  get telfCo() {
    return this.empresaForm.get('telfCo');
  }
  get parroquiaMa() {
    return this.empresaForm.get('parroquiaMa');
  }
  get provinciaMa() {
    return this.empresaForm.get('provinciaMa');
  }
  get provincia() {
    return this.provinciaMa?.get('provincia');
  }
  get cantonMa() {
    return this.empresaForm.get('cantonMa');
  }
  get direccionMa() {
    return this.empresaForm.get('direccionMa');
  }
  get parroquiaSu() {
    return this.empresaForm.get('parroquiaSu');
  }
  get provinciaSu() {
    return this.empresaForm.get('provinciaSu');
  }
  get cantonSu() {
    return this.empresaForm.get('cantonSu');
  }
  get direccionSu() {
    return this.empresaForm.get('direccionSu');
  }
  get numEE() {
    return this.empresaForm.get('numEE');
  }
  get totalEE() {
    return this.empresaForm.get('totalEE');
  }
  get lugarU() {
    return this.empresaForm.get('lugarU');
  }
  get beneficiariosDi() {
    return this.empresaForm.get('beneficiariosDi');
  }
  get beneficiariosIndi() {
    return this.empresaForm.get('beneficiariosIndi');
  }
}
